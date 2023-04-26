import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("name");
  if (cookie) {
    return NextResponse.rewrite(new URL(`/dy/${cookie.value}`, request.url));
  }
  return NextResponse.rewrite(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
