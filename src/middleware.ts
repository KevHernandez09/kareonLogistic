import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "kareon_session";

const PROTECTED_PREFIXES = [
  "/dashboard",
  "/master-data",
  "/inventory",
  "/orders",
  "/delivery",
  "/incidents",
  "/analytics",
  "/system",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  const hasCookie = req.cookies.get(COOKIE_NAME);
  if (!hasCookie) {
    const url = new URL("/login", req.url);
    url.searchParams.set("next", pathname); // safe: solo pathname
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/master-data/:path*",
    "/inventory/:path*",
    "/orders/:path*",
    "/delivery/:path*",
    "/incidents/:path*",
    "/analytics/:path*",
    "/system/:path*",
  ],
};
