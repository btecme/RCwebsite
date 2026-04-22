import { NextRequest, NextResponse } from "next/server";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const NOTIFY_EMAIL = "shelby@repairclaws.com";

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true; // skip if not configured yet
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${TURNSTILE_SECRET}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, type, message, turnstileToken } = body;

    if (!name || !email || !type || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Verify Turnstile if configured
    if (TURNSTILE_SECRET && turnstileToken) {
      const valid = await verifyTurnstile(turnstileToken);
      if (!valid) {
        return NextResponse.json({ error: "Spam check failed" }, { status: 403 });
      }
    }

    // Injection screening — flag obvious prompt injection attempts
    const injectionPatterns = [
      /ignore (all |previous )?instructions/i,
      /system override/i,
      /you are now/i,
      /new instructions/i,
      /admin mode/i,
      /forget everything/i,
      /DAN mode/i,
      /jailbreak/i,
    ];
    const combined = `${name} ${message}`;
    const flagged = injectionPatterns.some(p => p.test(combined));

    // Send notification email via Resend (if configured)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Repair Claws Contact Form <noreply@repairclaws.com>",
          to: [NOTIFY_EMAIL],
          subject: `${flagged ? "[FLAGGED] " : ""}New contact: ${type} from ${name}`,
          text: [
            flagged ? "⚠️ FLAGGED: Possible injection attempt detected. Review before processing.\n" : "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Type: ${type}`,
            `Message:\n${message}`,
            `\nSubmitted: ${new Date().toISOString()}`,
            `IP: ${req.headers.get("cf-connecting-ip") || "unknown"}`,
          ].join("\n"),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
