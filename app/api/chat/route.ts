import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;
    
    // API call parameters
    const model = 'gemini-2.0-flash';
    const apiKey = 'sk-qjse7jxybzh1SgCv6aD1B9EeD4D0444396389c08E44b89E7';
    const apiUrl = 'https://api.vveai.com/v1/chat/completions';
    
    // Make API call
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        max_tokens: 500
      })
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('API error:', errorData);
      throw new Error('API request failed');
    }
    
    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;
    
    return NextResponse.json({ response: assistantMessage });
  } catch (error) {
    console.error('Error with chat API:', error);
    return NextResponse.json(
      { response: "I'm having trouble connecting right now. Please try again later." },
      { status: 200 } // Return 200 so frontend doesn't throw another error
    );
  }
}