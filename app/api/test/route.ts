import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        { message: 'Please use POST request' },
        { status: 405 }
    );
}
