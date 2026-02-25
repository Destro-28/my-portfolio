import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Server-side logging
    console.log("New Contact Message:", payload);

    return NextResponse.json(
      { success: true, message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error occurred." },
      { status: 500 }
    );
  }
}