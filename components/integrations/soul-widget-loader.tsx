"use client";

import { useEffect } from "react";

type WidgetConfig = {
  apiBase: string;
  botName: string;
  buttonText: string;
  companyName: string;
  consentRequired: boolean;
  greeting: string;
  leadCaptureEnabled: boolean;
  logoUrl: string;
  placeholder: string;
  position: string;
  privacyUrl: string;
  publicKey: string;
  siteId: string;
  siteKey: string;
  suggestedQuestionsByPath?: Record<string, string[]>;
  theme?: Record<string, string>;
  title: string;
};

declare global {
  interface Window {
    SSB_CHAT?: WidgetConfig & { containerId: string };
    SSB_CHAT_LOADING?: boolean;
    SSB_CHAT_MOUNTED?: boolean;
  }
}

const HOST_ID = "ssb-chat-host";
const SCRIPT_ID = "ssb-widget-proxy-script";

function ensureHost() {
  const existingHost = document.getElementById(HOST_ID);

  if (existingHost instanceof HTMLDivElement) {
    return existingHost;
  }

  const host = document.createElement("div");
  host.id = HOST_ID;
  document.body.appendChild(host);
  return host;
}

export function SoulWidgetLoader() {
  useEffect(() => {
    let cancelled = false;

    async function mountWidget() {
      if (window.SSB_CHAT_MOUNTED || window.SSB_CHAT_LOADING) {
        return;
      }

      window.SSB_CHAT_LOADING = true;

      try {
        const response = await fetch("/ssb-widget-config", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Widget config request failed with HTTP ${response.status}`);
        }

        const config = (await response.json()) as WidgetConfig;

        if (cancelled) {
          return;
        }

        const host = ensureHost();

        window.SSB_CHAT = {
          ...config,
          containerId: host.id,
        };

        const existingScript = document.getElementById(SCRIPT_ID);

        if (existingScript instanceof HTMLScriptElement) {
          return;
        }

        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = "/ssb-widget.js";
        script.async = true;
        script.onerror = () => {
          console.error("SSB widget bundle failed to load.");
        };
        document.body.appendChild(script);
      } catch (error) {
        console.error("SSB widget initialization failed.", error);
      } finally {
        window.SSB_CHAT_LOADING = false;
      }
    }

    void mountWidget();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
