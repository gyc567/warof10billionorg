import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "f3b0d079-52e6-41a1-9b2e-6caeef20bebf");
  requestHeaders.set("x-createxyz-project-group-id", "dd61963e-3153-48e2-95ea-013bd7904805");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}