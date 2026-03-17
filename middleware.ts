import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");

  // Block ALL access from Vercel domain
  if (host?.includes("vercel.app")) {
    return new NextResponse(null, { status: 404 }); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};