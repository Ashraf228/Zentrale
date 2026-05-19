import { NextResponse } from "next/server";

const CONFIG_URL =
  "https://widget.soulesmartbusiness.com/widget/config?siteKey=rohrreinigung-ffm24";

export const dynamic = "force-dynamic";

export async function GET() {
  const response = await fetch(CONFIG_URL, {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        error: `Widget config request failed with HTTP ${response.status}`,
      },
      {
        status: response.status,
      },
    );
  }

  const json = await response.json();

  return NextResponse.json(json, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
