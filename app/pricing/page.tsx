"use client"
import Link from "next/link"
import { Check, DollarSign, Truck, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function PricingPage() {
  // State for earnings calculator
  const [calculatorData, setCalculatorData] = useState({
    wasteAmount: "",
    serviceType: "self-delivery"
  })
  const [calculatorSubmitted, setCalculatorSubmitted] = useState(false)
  const [earnings, setEarnings] = useState({
    weekly: 0,
    monthly: 0,
    yearly: 0
  })
  
  // State for subscription form
  const [email, setEmail] = useState("")
  const [subscriptionSubmitted, setSubscriptionSubmitted] = useState(false)
  
  // Handle earnings calculator input change
  const handleCalculatorChange = (e) => {
    const { id, value } = e.target
    setCalculatorData(prev => ({
      ...prev,
      [id]: value
    }))
  }
  
  // Handle service type selection change
  const handleServiceTypeChange = (value) => {
    setCalculatorData(prev => ({
      ...prev,
      serviceType: value
    }))
  }
  
  // Handle earnings calculator submission
  const handleCalculate = (e) => {
    e.preventDefault()
    
    // Calculate earnings
    const amount = parseFloat(calculatorData.wasteAmount) || 0
    const rate = calculatorData.serviceType === "self-delivery" ? 0.5 : 0.3
    
    const weeklyEarning = amount * rate
    const monthlyEarning = weeklyEarning * 4.33  // Average weeks in a month
    const yearlyEarning = weeklyEarning * 52
    
    setEarnings({
      weekly: weeklyEarning.toFixed(2),
      monthly: monthlyEarning.toFixed(2),
      yearly: yearlyEarning.toFixed(2)
    })
    
    // Show success animation
    setCalculatorSubmitted(true)
    
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setCalculatorSubmitted(false)
    }, 3000)
  }
  
  // Handle subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault()
    
    // Show success animation
    setSubscriptionSubmitted(true)
    
    // Reset form and submission status after 3 seconds
    setTimeout(() => {
      setEmail("")
      setSubscriptionSubmitted(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="EcoFeed Icon" width={24} height={24} className="h-6 w-6" />
            <span className="font-bold text-xl">EcoFeed HK</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/process" className="text-sm font-medium hover:underline underline-offset-4">
              Our Process
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex bg-green-600 hover:bg-green-700">
            <Link href="/register">Get Started</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get paid for your food waste while contributing to a more sustainable Hong Kong
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Pricing Structure</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer competitive rates for your food waste, with two service options to choose from. Our pricing
                  is transparent and based on the weight of food waste collected or delivered.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">No Hidden Fees</h3>
                      <p className="text-gray-500">Our pricing is straightforward with no hidden charges or fees.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Monthly Payments</h3>
                      <p className="text-gray-500">Receive monthly payments directly to your bank account.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Detailed Reports</h3>
                      <p className="text-gray-500">Get detailed monthly reports of all collections and payments.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">Self-Delivery</CardTitle>
                    <CardDescription>Deliver food waste to our recycling centers</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-baseline gap-1">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="text-4xl font-bold">0.50</span>
                      <span className="text-gray-500">per kg</span>
                    </div>
                    <ul className="mt-4 grid gap-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Higher payout rate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Multiple drop-off locations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Flexible delivery times</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>No minimum quantity required</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="/register?service=self-delivery">Choose Self-Delivery</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">Collection Service</CardTitle>
                    <CardDescription>We collect food waste from your location</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-baseline gap-1">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="text-4xl font-bold">0.30</span>
                      <span className="text-gray-500">per kg</span>
                    </div>
                    <ul className="mt-4 grid gap-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Convenient pickup service</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Regular scheduled collections</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>No transportation needed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Minimum 50kg per collection</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="/register?service=collection">Choose Collection Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Earnings Calculator</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estimate how much you can earn from recycling your food waste
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Calculate Your Earnings</CardTitle>
                  <CardDescription>Enter your estimated food waste quantity</CardDescription>
                </CardHeader>
                <form onSubmit={handleCalculate}>
                  <CardContent>
                    {calculatorSubmitted && (
                      <div className="bg-green-100 border border-green-200 text-green-800 rounded-md p-4 flex items-center gap-2 animate-fade-in mb-4">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Calculation complete!</span>
                      </div>
                    )}
                    <div className="grid gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="wasteAmount">Estimated food waste per week (kg)</Label>
                        <div className="flex items-center gap-2">
                          <Input 
                            id="wasteAmount" 
                            type="number" 
                            placeholder="Enter amount" 
                            value={calculatorData.wasteAmount}
                            onChange={handleCalculatorChange}
                            required
                          />
                          <span>kg</span>
                        </div>
                      </div>
                      <RadioGroup 
                        value={calculatorData.serviceType}
                        onValueChange={handleServiceTypeChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self-delivery" id="self-delivery" />
                          <Label htmlFor="self-delivery" className="flex items-center gap-2">
                            <Truck className="h-4 w-4" /> Self-Delivery (HK$0.50/kg)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="collection" id="collection" />
                          <Label htmlFor="collection" className="flex items-center gap-2">
                            <Truck className="h-4 w-4" /> Collection Service (HK$0.30/kg)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="w-full p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Weekly earnings:</span>
                        <span className="font-bold">HK${earnings.weekly}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-medium">Monthly earnings:</span>
                        <span className="font-bold">HK${earnings.monthly}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-medium">Yearly earnings:</span>
                        <span className="font-bold">HK${earnings.yearly}</span>
                      </div>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={calculatorSubmitted}
                    >
                      {calculatorSubmitted ? "Calculating..." : "Calculate"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center w-full">
                      This is an estimate. Actual earnings may vary based on the weight and quality of food waste.
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Volume Discounts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  For large organizations with significant food waste volumes
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <Tabs defaultValue="monthly">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly Volume</TabsTrigger>
                  <TabsTrigger value="contract">Annual Contract</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="p-4 border rounded-lg mt-4">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-3 font-bold border-b pb-2">
                      <div>Monthly Volume</div>
                      <div>Self-Delivery Rate</div>
                      <div>Collection Rate</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div>500-1,000 kg</div>
                      <div>HK$0.55/kg</div>
                      <div>HK$0.35/kg</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div>1,001-2,000 kg</div>
                      <div>HK$0.60/kg</div>
                      <div>HK$0.40/kg</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div>2,001+ kg</div>
                      <div>HK$0.65/kg</div>
                      <div>HK$0.45/kg</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="contract" className="p-4 border rounded-lg mt-4">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-3 font-bold border-b pb-2">
                      <div>Contract Term</div>
                      <div>Self-Delivery Rate</div>
                      <div>Collection Rate</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div>1-Year Contract</div>
                      <div>HK$0.55/kg</div>
                      <div>HK$0.35/kg</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div>2-Year Contract</div>
                      <div>HK$0.60/kg</div>
                      <div>HK$0.40/kg</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div>3-Year Contract</div>
                      <div>HK$0.65/kg</div>
                      <div>HK$0.45/kg</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-6 text-center">
                <p className="text-gray-500 mb-4">
                  For large organizations with significant food waste volumes, we offer custom pricing plans. Contact
                  our team to discuss your specific needs and requirements.
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Contact for Custom Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-900 text-white">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                  <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                  <path d="m14 16-3 3 3 3" />
                  <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                  <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                  <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
                </svg>
                
                <span className="font-bold text-xl">EcoFeed HK</span>
              </div>
              <p className="text-green-200">
                Transforming food waste into valuable resources for a more sustainable Hong Kong.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Quick Links</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="/" className="text-green-200 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-green-200 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-green-200 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="text-green-200 hover:text-white">
                    Our Process
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Contact</h3>
              <ul className="grid gap-2">
                <li className="text-green-200">123 Eco Street, Eco</li>
                <li className="text-green-200">Hong Kong</li>
                <li className="text-green-200">Eco@littleblack111.com</li>
                <li className="text-green-200">+852 91476484</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Subscribe</h3>
              <p className="text-green-200">Stay updated with our latest news and offers.</p>
              <form className="flex gap-2" onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md px-3 py-2 text-sm text-black w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit"
                  className="bg-green-600 hover:bg-green-700"
                  disabled={subscriptionSubmitted}
                >
                  {subscriptionSubmitted ? "Sent" : "Subscribe"}
                </Button>
              </form>
              {subscriptionSubmitted && (
                <div className="bg-green-800 text-green-100 rounded-md p-2 text-sm flex items-center gap-2 animate-fade-in">
                  <CheckCircle className="h-4 w-4" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 border-t border-green-800 pt-8 text-center text-green-200">
            <p>© 2025 EcoFeed HK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

