"use server";
import { NextResponse, NextRequest } from 'next/server';
export function proxy(request:NextRequest){
    const res = NextResponse.next();
    res.headers.set('x-pathname',request.nextUrl.pathname);
    return res;
}