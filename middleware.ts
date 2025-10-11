import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Check if it's the helpcenter subdomain
  if (hostname.startsWith('helpcenter.')) {
    // Rewrite to the helpcenter page
    return NextResponse.rewrite(new URL('/helpcenter', request.url))
  }
  
  // Redirect non-www to www for main domain (SSL certificate issue)
  if (hostname === 'sendwise.nl') {
    return NextResponse.redirect(new URL(`https://www.sendwise.nl${request.nextUrl.pathname}`, request.url), 301)
  }
  
  // For all other domains, continue normally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon.png (favicon file)
     * - apple-icon.png (apple touch icon)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)',
  ],
}

