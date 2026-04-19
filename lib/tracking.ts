export type TrackingParams = Record<string, string | number | boolean | undefined>;
export type AttributionData = {
  landing_page: string;
  current_page?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const ATTRIBUTION_KEY = "rrffm24_attribution";

function readQueryParam(searchParams: URLSearchParams, key: string) {
  const value = searchParams.get(key);
  return value || undefined;
}

function readStoredAttribution() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AttributionData;
  } catch {
    return null;
  }
}

export function captureAttribution(path?: string) {
  if (typeof window === "undefined") {
    return null;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const currentPage =
    path ??
    `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const firstTouch = readStoredAttribution();

  const nextAttribution: AttributionData = {
    landing_page: firstTouch?.landing_page ?? currentPage,
    current_page: currentPage,
    referrer: firstTouch?.referrer ?? (document.referrer || undefined),
    utm_source: firstTouch?.utm_source ?? readQueryParam(searchParams, "utm_source"),
    utm_medium: firstTouch?.utm_medium ?? readQueryParam(searchParams, "utm_medium"),
    utm_campaign: firstTouch?.utm_campaign ?? readQueryParam(searchParams, "utm_campaign"),
    utm_term: firstTouch?.utm_term ?? readQueryParam(searchParams, "utm_term"),
    utm_content: firstTouch?.utm_content ?? readQueryParam(searchParams, "utm_content"),
    gclid: firstTouch?.gclid ?? readQueryParam(searchParams, "gclid"),
    fbclid: firstTouch?.fbclid ?? readQueryParam(searchParams, "fbclid"),
  };

  window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(nextAttribution));
  return nextAttribution;
}

export function getAttribution(currentPage?: string) {
  if (typeof window === "undefined") {
    return {};
  }

  const attribution = captureAttribution(currentPage) ?? readStoredAttribution();

  if (!attribution) {
    return {};
  }

  return {
    ...attribution,
    current_page: currentPage ?? attribution.current_page,
  };
}

export function trackEvent(name: string, params: TrackingParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: name,
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function" && GA_ID) {
    window.gtag("event", name, params);
  }
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") {
    return;
  }

  const attribution = captureAttribution(path);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
    ...attribution,
  });

  if (typeof window.gtag === "function" && GA_ID) {
    window.gtag("config", GA_ID, {
      page_path: path,
      page_location: `${window.location.origin}${path}`,
      page_title: document.title,
    });
  }
}

export function trackClarity(name: string) {
  if (typeof window === "undefined" || typeof window.clarity !== "function" || !CLARITY_ID) {
    return;
  }

  window.clarity("event", name);
}
