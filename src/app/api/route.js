import { NextResponse } from "next/server"

export const POST = async ({ request }) => {
    const body = await request.json();

    return NextResponse.json()
}