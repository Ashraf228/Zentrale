import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    "google-site-verification: google6655cdd9464e64ba.html",
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=300",
      },
    },
  );
}
