import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;
    
    // In a production environment, you'd verify the token with Google's API
    // This is a simplified example
    if (token) {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json(
      { success: false, error: 'Invalid token' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to verify reCAPTCHA' },
      { status: 500 }
    );
  }
}