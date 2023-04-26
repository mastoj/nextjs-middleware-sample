import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent");
  // Example user agent "Mozilla / 5.0 (Linux; Android 6.0; Nexus 5 Build / MRA58N) AppleWebKit / 537.36 (KHTML, like Gecko) Chrome / 93.0.4577.82 Mobile Safari / 537.36 user: tomas"
  if (userAgent?.includes("user:")) {
    const user = userAgent.split("user:")[1].trim();
    return NextResponse.rewrite(new URL(`/dy/${user}`, request.url));
  }
  return NextResponse.rewrite(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
