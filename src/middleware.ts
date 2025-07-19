import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    // Example: Log the request URL
    console.log('Request URL:', req.url);

    // You can add custom logic here

    return NextResponse.next();
}