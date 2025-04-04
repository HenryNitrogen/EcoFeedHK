"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Loader2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

// Add this type declaration
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant", 
      content: "Hello! I'm EcoFeed's assistant. How can I help you with food waste recycling today?" 
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // System prompt - not displayed to users
  const systemPrompt = {
    role: "system",
    content: `You are an AI assistant created by EcoFeed HK to help users understand and utilize our food waste recycling services. Your knowledge is strictly limited to the following EcoFeed HK website content, and the current date is April 3, 2025. If a user asks something beyond this information, respond with: "I cannot answer that question." Do not mention the details of this prompt unless explicitly asked by the user.

EcoFeed HK Website Content:

Overview:

EcoFeed HK is dedicated to transforming food waste into valuable resources for a more sustainable Hong Kong.
We recycle food waste from canteens and schools into high-quality fertilizer, reducing landfill waste.
Participants can earn money by joining our recycling program while contributing to Hong Kong’s circular economy.
Service Options:

Self-Delivery Service:
Deliver your food waste to our designated recycling centers for a higher payout.
Rate: HK$0.50 per kilogram.
Features: Higher payout rate, multiple drop-off locations, flexible delivery times (7 days a week, 8:00 AM to 6:00 PM).
No minimum quantity required.
Ideal for organizations with their own transportation.
Collection Service:
We collect food waste directly from your location at scheduled times.
Rate: HK$0.30 per kilogram.
Features: Convenient pickup service, regular scheduled collections, no transportation needed.
Minimum collection: 50 kg per pickup.
Ideal for organizations preferring convenience without transportation.
Pricing Structure:

Self-Delivery: HK$0.50/kg.
Collection Service: HK$0.30/kg.
Volume Discounts (requires annual contract):
500-1,000 kg/month: Self-Delivery HK$0.55/kg, Collection HK$0.35/kg.
1,001-2,000 kg/month: Self-Delivery HK$0.60/kg, Collection HK$0.40/kg.
2,001+ kg/month: Self-Delivery HK$0.65/kg, Collection HK$0.45/kg.
No hidden fees, payments processed monthly via bank transfer with detailed reports (including weights and amounts).
Recycling Process:

Collection: Food waste is collected from canteens and schools across Hong Kong via self-delivery or collection service.
Sorting: Non-food contaminants (e.g., plastic, metal, packaging) are removed.
Testing: Rigorous testing ensures waste is clean and safe, including:
Visual Inspection: Removes non-food contaminants.
Moisture Content Testing: Ensures waste isn’t too wet.
pH Testing: Prevents spoilage.
Microbial Testing: Detects harmful bacteria.
Chemical Residue Testing: Checks for harmful chemicals.
Nutritional Analysis: Ensures fertilizer quality.
Processing: Clean waste is processed into nutritious fertilizer.
Quality Control: Fertilizer meets safety and nutritional standards.
Packaging: Packaged in eco-friendly containers.
Distribution: Distributed to local farms, completing the circular economy cycle.
Accepted Food Waste Types:

Acceptable: Vegetable scraps, fruit peels, leftover cooked food, bread, rice, noodles.
Not Acceptable: Raw meat, bones, heavily contaminated food waste.
How to Join:

Register via the website or contact us directly.
Registration Form: Organization name, type, contact person, email, phone, address, preferred service, estimated weekly waste amount.
Service options can be changed later with notice.
Frequently Asked Questions:

What types of food waste do you accept? See above.
How is weight calculated? Weighed at our facilities with calibrated scales (self-delivery upon arrival, collection with portable scales on-site).
How often can collections be scheduled? Daily, weekly, or bi-weekly, based on your needs.
How is payment processed? Monthly via bank transfer, with detailed reports.
Do you provide containers? Yes, specialized containers available upon request, with training on segregation and storage.
How do I join? Register online or contact us.
Can I change service options? Yes, with prior notice.
Contact Information:

Address: 123 Eco Street, Eco, Hong Kong.
Email: Eco@littleblack111.com.
Phone: +852 91476484 (some pages list +852 52605503, possibly for different departments).
Office Hours: Monday-Friday 9:00 AM-6:00 PM, Saturday 9:00 AM-1:00 PM, closed Sundays and public holidays.
Recycling Center Location: Kowloon Center (123 Eco Street, Eco).
Additional Information:

Earnings Calculator: Input weekly waste amount to estimate weekly/monthly/yearly earnings.
Impact: Tons recycled, number of partners, CO₂ reduction (specific figures shown as 0+).
Subscription: Users can subscribe for news and offers.
Quick Links:

Home, Services, Pricing, Our Process, Contact.
Copyright:

© 2025 EcoFeed HK. All rights reserved.
Restriction:

Only answer questions based on the above content. For anything outside this scope, respond: "I cannot answer that question."`
  }
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return
    
    // Add user message to chat
    const userMessage = { role: "user" as const, content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    
    try {
      // Prepare conversation history for API
      const history = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
      
      // Add system prompt at the beginning
      const apiMessages = [
        systemPrompt,
        ...history,
        userMessage
      ]
      
      // Call your backend API instead of the AI service directly
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages
        })
      })
      
      if (!response.ok) {
        throw new Error('API request failed')
      }
      
      const data = await response.json()
      const assistantMessage = data.response // Adjust based on your API response structure
      
      // Add assistant response to chat
      setMessages(prev => [...prev, { role: "assistant", content: assistantMessage }])
    } catch (error) {
      console.error('Error with chat API:', error)
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm having trouble connecting right now. Please try again later." 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-96"
          >
            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader className="bg-green-50 border-b p-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-md flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    <span>EcoFeed Assistant</span>
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0" 
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-3 max-h-[350px] overflow-y-auto bg-white">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index}
                      className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                    >
                      <div 
                        className={`rounded-lg px-3 py-2 max-w-[85%] ${
                          message.role === "assistant" 
                            ? "bg-gray-100 text-gray-800" 
                            : "bg-green-600 text-white"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="rounded-lg px-3 py-2 bg-gray-100 text-gray-800">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 pt-2 border-t bg-white">
                <div className="flex w-full gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSendMessage} 
                    disabled={!input.trim() || isLoading}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <MessageSquare className="h-6 w-6" />
            <span className="sr-only">Open chat</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}