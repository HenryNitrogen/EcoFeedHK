"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Recycle, Truck, DollarSign, FlaskRoundIcon as Flask, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedIcon } from "@/components/animated-icon"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedCounter } from "@/components/animated-counter"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <AnimatedIcon icon={Recycle} className="h-6 w-6 text-green-600" animationType="spin" />
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
          <AnimatedButton asChild className="hidden md:inline-flex bg-green-600 hover:bg-green-700">
            <Link href="/register">Get Started</Link>
          </AnimatedButton>
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Turn Food Waste into Value for Hong Kong
                  </h1>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our initiative to recycle food waste from canteens and schools into high-quality animal feed.
                    Get paid for your contribution to a more sustainable Hong Kong.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedButton asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/register">Start Recycling</Link>
                    </AnimatedButton>
                    <AnimatedButton asChild variant="outline">
                      <Link href="/services">Learn More</Link>
                    </AnimatedButton>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.3}>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <Image
                    src="/image (2).jpg"
                    alt="Food waste recycling"
                    width={550}
                    height={550}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Two Ways to Recycle</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the option that works best for your canteen or school
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection direction="left" delay={0.2}>
                <AnimatedCard>
                  <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-green-100 p-2">
                        <AnimatedIcon icon={Truck} className="h-6 w-6 text-green-600" animationType="bounce" />
                      </div>
                      <h3 className="text-xl font-bold">Self-Delivery</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-500">
                        Deliver your food waste to our designated recycling centers and receive a higher payout.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span>HK$0.50 per kilogram</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-green-600" />
                          <span>Higher payout rate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-green-600" />
                          <span>Flexible delivery times</span>
                        </li>
                      </ul>
                    </div>
                    <AnimatedButton asChild className="mt-2 bg-green-600 hover:bg-green-700">
                      <Link href="/services#self-delivery">Learn More</Link>
                    </AnimatedButton>
                  </div>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.4}>
                <AnimatedCard>
                  <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-green-100 p-2">
                        <AnimatedIcon icon={Truck} className="h-6 w-6 text-green-600" animationType="bounce" />
                      </div>
                      <h3 className="text-xl font-bold">Collection Service</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-500">
                        We collect food waste directly from your location at scheduled times.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span>HK$0.30 per kilogram</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-green-600" />
                          <span>Convenient pickup service</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-green-600" />
                          <span>Regular scheduled collections</span>
                        </li>
                      </ul>
                    </div>
                    <AnimatedButton asChild className="mt-2 bg-green-600 hover:bg-green-700">
                      <Link href="/services#collection">Learn More</Link>
                    </AnimatedButton>
                  </div>
                </AnimatedCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                    Our Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From Waste to Feed</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    How we transform food waste into high-quality animal feed
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <AnimatedSection direction="up" delay={0.2}>
                <AnimatedCard>
                  <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                    <div className="rounded-full bg-green-100 p-3">
                      <AnimatedIcon icon={Recycle} className="h-8 w-8 text-green-600" animationType="spin" />
                    </div>
                    <h3 className="text-xl font-bold">Collection & Sorting</h3>
                    <p className="text-center text-gray-500">
                      Food waste is collected and sorted to remove any non-food contaminants.
                    </p>
                  </div>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <AnimatedCard>
                  <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                    <div className="rounded-full bg-green-100 p-3">
                      <AnimatedIcon icon={Flask} className="h-8 w-8 text-green-600" animationType="pulse" />
                    </div>
                    <h3 className="text-xl font-bold">Testing & Processing</h3>
                    <p className="text-center text-gray-500">
                      Rigorous testing ensures the waste is clean and safe before processing into feed.
                    </p>
                  </div>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <AnimatedCard>
                  <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                    <div className="rounded-full bg-green-100 p-3">
                      <AnimatedIcon icon={Building} className="h-8 w-8 text-green-600" animationType="pulse" />
                    </div>
                    <h3 className="text-xl font-bold">Production & Distribution</h3>
                    <p className="text-center text-gray-500">
                      The processed waste is transformed into nutritious animal feed for local farms.
                    </p>
                  </div>
                </AnimatedCard>
              </AnimatedSection>
            </div>
            <AnimatedSection direction="up" delay={0.8}>
              <div className="flex justify-center">
                <AnimatedButton asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/process">Learn More About Our Process</Link>
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2}>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <Image
                    src="/trash.jpg"
                    alt="Join our recycling program"
                    width={550}
                    height={550}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.4}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Join Our Recycling Program Today
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Help reduce food waste in Hong Kong while earning money for your organization. Our program is
                    perfect for schools, canteens, and large food service operations.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedButton asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/register">Register Now</Link>
                    </AnimatedButton>
                    <AnimatedButton asChild variant="outline">
                      <Link href="/contact">Contact Us</Link>
                    </AnimatedButton>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Making a difference in Hong Kong's environment
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <AnimatedCounter end={0} suffix="+" className="text-4xl font-bold text-green-600" />
                  <h3 className="text-xl font-bold">Tons Recycled</h3>
                  <p className="text-gray-500">Food waste diverted from landfills</p>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <AnimatedCounter end={0} suffix="+" className="text-4xl font-bold text-green-600" />
                  <h3 className="text-xl font-bold">Partners</h3>
                  <p className="text-gray-500">Schools and canteens participating</p>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <AnimatedCounter end={0} suffix="+" className="text-4xl font-bold text-green-600" />
                  <h3 className="text-xl font-bold">CO₂ Reduction</h3>
                  <p className="text-gray-500">Tons of CO₂ emissions prevented</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-900 text-white">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AnimatedIcon icon={Recycle} className="h-6 w-6" animationType="spin" />
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
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md px-3 py-2 text-sm text-black w-full"
                />
                <AnimatedButton className="bg-green-600 hover:bg-green-700">Subscribe</AnimatedButton>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-green-800 pt-8 text-center text-green-200">
            <p>© 2025 EcoFeed HK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

