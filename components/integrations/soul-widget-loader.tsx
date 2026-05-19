"use client";

import { useEffect } from "react";

const LOADER_ID = "ssb-widget-loader-script";
const LOADER_SRC = "https://widget.soulesmartbusiness.com/loader.js";
const SITE_KEY = "rohrreinigung-ffm24";

export function SoulWidgetLoader() {
  useEffect(() => {
    if (document.getElementById(LOADER_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = LOADER_ID;
    script.src = LOADER_SRC;
    script.async = true;
    script.setAttribute("data-site-key", SITE_KEY);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
