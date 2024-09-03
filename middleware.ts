// import type { NextRequest, NextResponse } from "next/server";

import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  // add a canonical link header to the response
  response.headers.set("Link", '<https://example.com>; rel="canonical"');
  return NextResponse.next();
  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
