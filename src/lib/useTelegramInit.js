import React from "react";

/**
 * Optional Telegram WebApp integration. Safe to ignore when testing in browser.
 * If opened inside Telegram via a Bot with a WebApp, this expands the UI.
 */
export default function useTelegramInit() {
  const tg =
    typeof window !== "undefined" ? window.Telegram?.WebApp : undefined;

  React.useEffect(() => {
    if (!tg) return;
    try {
      tg.expand();
      tg.enableClosingConfirmation?.();
      tg.setHeaderColor?.("#ffffff");
      tg.setBackgroundColor?.("#ffffff");
    } catch (err) {
      console.error("Telegram init error:", err);
    }
  }, [tg]);
}
