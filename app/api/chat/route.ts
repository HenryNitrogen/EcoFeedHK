import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body;
    
    // API call parameters
    const model = 'gemini-2.0-flash';
    const apiKey = 'sk-qjse7jxybzh1SgCv6aD1B9EeD4D0444396389c08E44b89E7';
    const apiUrl = 'https://api.vveai.com/v1/chat/completions';
    
    console.log('Sending to API:', JSON.stringify({
      model,
      messages: messages.length,
      first_message: messages[0]?.content?.substring(0, 50) // Log partial first message for debugging
    }));
    
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
    
    // Add detailed logging for debugging
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error details:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    
    // Handle different response formats
    let assistantMessage;
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      // Standard format
      assistantMessage = data.choices[0].message.content;
    } else if (data.response) {
      // Some APIs return response directly
      assistantMessage = data.response;
    } else if (data.output) {
      // Some APIs use output field
      assistantMessage = typeof data.output === 'string' ? data.output : JSON.stringify(data.output);
    } else {
      // Fallback - return the raw response for debugging
      console.log('Unexpected API response format:', JSON.stringify(data).substring(0, 500));
      assistantMessage = "I received a response but couldn't parse it correctly. Please try again.";
    }
    
    return NextResponse.json({ response: assistantMessage });
  } catch (error) {
    console.error('Error with chat API:', error);
    return NextResponse.json(
      { response: "I'm having trouble connecting right now. Please try again later." },
      { status: 200 } // Return 200 so frontend doesn't throw another error
    );
  }
}