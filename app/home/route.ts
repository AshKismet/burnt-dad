import { NextResponse } from "next/server";
import { homeHtml } from "../home-content";

export function GET() {
  return new NextResponse(homeHtml, {
    headers: { "Content-Type": "text/html" },
  });
}
