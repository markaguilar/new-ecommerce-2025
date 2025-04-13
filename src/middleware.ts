import { type NextRequest, NextResponse } from "next/server";

import {
  API,
  PUBLIC_ROUTES,
  PRIVATE_ROUTES,
  ROUTES,
} from "@/lib/utils/constant";

export default async function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);

  const currentPath = req.nextUrl.pathname;
  const pubLicRoute = PUBLIC_ROUTES.includes(currentPath);
  const privateRoute = PRIVATE_ROUTES.includes(currentPath);

  const accessToken = {
    isValid: false,
  };
  /*const accessToken = await verifyTokenFromCookie(
    COOKIE_ACCESS_TOKEN.name,
    process.env.SECRET_KEY_ACCESS_TOKEN,
    process.env.JWT_ACCESS_TOKEN_KEY,
  );*/

  if (pubLicRoute && accessToken.isValid) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!accessToken.isValid) {
    const refreshToken = {
      isValid: false,
    };
    /*const refreshToken = await verifyTokenFromCookie(
        COOKIE_REFRESH_TOKEN.name,
        process.env.SECRET_KEY_REFRESH_TOKEN,
        process.env.JWT_REFRESH_TOKEN_KEY,
    );*/

    /* if (refreshToken.isValid) {
      return NextResponse.redirect(new URL("/api/refreshToken", req.url));
    }*/

    if (!refreshToken.isValid && privateRoute) {
      return NextResponse.redirect(new URL(ROUTES.SIGNIN, req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public|.*\\.png$).*)",
  ],
};
