import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const LOCALES = ["en", "it", "al"]
const DEFAULT_LOCALE = "en"

/**
 * Returns true when the request points to a real static file
 */
function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/_next/") || // internal Next.js chunks / images
    pathname.startsWith("/api/") || // API routes
    pathname.startsWith("/images/") || // your images folder
    pathname.startsWith("/favicon") || // favicons / icons
    pathname.startsWith("/robots.txt") || // robots.txt
    pathname.startsWith("/sitemap.xml") || // sitemap
    pathname.includes(".") // anything with an extension (.png, .js, .css, …)
  )
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1 – never touch real files or static assets
  if (isStaticAsset(pathname)) {
    return NextResponse.next()
  }

  // 2 – Handle root path redirect
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url))
  }

  // 3 – skip if the URL already has a locale segment
  const hasLocale = LOCALES.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  if (hasLocale) {
    return NextResponse.next()
  }

  // 4 – redirect to default locale for other paths
  return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url))
}

/**
 * Only run middleware on paths that need locale handling
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (your image folder)
     * - Any file with an extension
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)",
  ],
}
