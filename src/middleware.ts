import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("name");
  if (cookie && cookie.value.trim() !== "") {
    return NextResponse.rewrite(new URL(`/dy/${cookie.value}`, request.url));
  }
  const response = NextResponse.rewrite(new URL("/", request.url));
  response.cookies.delete("name");
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
