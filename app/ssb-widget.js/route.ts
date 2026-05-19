import { NextResponse } from "next/server";

const WIDGET_BUNDLE_URL = "https://widget.soulesmartbusiness.com/widget.js";

export const dynamic = "force-dynamic";

export async function GET() {
  const response = await fetch(WIDGET_BUNDLE_URL, {
    headers: {
      Accept: "application/javascript",
    },
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    return new NextResponse(
      `console.error(${JSON.stringify(
        `SSB widget bundle request failed with HTTP ${response.status}`,
      )});`,
      {
        status: 200,
        headers: {
          "Content-Type": "application/javascript; charset=utf-8",
        },
      },
    );
  }

  const script = await response.text();

  return new NextResponse(script, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
