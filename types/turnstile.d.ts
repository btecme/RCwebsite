interface Window {
  turnstile?: {
    render: (container: HTMLElement, options: { sitekey: string; size?: string }) => string;
    getResponse: (widgetId: string) => string | undefined;
    execute: (widgetId: string) => Promise<void>;
    reset: (widgetId: string) => void;
  };
}
