import { NextResponse } from "next/server";

export function middleware(request) {
    if (!request.cookies.has('steelhealth_token'))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        '/alimentacoes/:path*',
        '/metas/:path*',
        '/treinos/:path*'
    ]
  }