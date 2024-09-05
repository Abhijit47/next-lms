// import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest, response: NextResponse) {
//   // add a canonical link header to the response
//   response.headers.set("Link", '<https://example.com>; rel="canonical"');
//   return NextResponse.next();
// }

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);

export default clerkMiddleware((auth, req) => {
  req.headers.set("Link", '<https://nxt-lms.vercel.app>; rel="canonical"');
  if (isProtectedRoute(req)) {
    // auth().protect((has) => {
    //   return has({ role: "admin" });
    // });
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
