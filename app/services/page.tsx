"use client"

import Link from "next/link"
import Image from "next/image"
import { Truck, DollarSign, MapPin, Calendar, Clock, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedIcon } from "@/components/animated-icon"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"

export default function ServicesPage() {
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
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the food waste recycling option that works best for your organization
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="self-delivery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Option 1</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Self-Delivery Service</h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Deliver your food waste to our designated recycling centers and receive a higher payout rate. This
                    option is perfect for organizations that have their own transportation and want to maximize their
                    earnings.
                  </p>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <AnimatedIcon icon={DollarSign} className="h-5 w-5 text-green-600" animationType="pulse" />
                      </div>
                      <div>
                        <h3 className="font-bold">Higher Payout Rate</h3>
                        <p className="text-gray-500">
                          Receive HK$0.50 per kilogram of food waste delivered to our centers.
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <AnimatedIcon icon={MapPin} className="h-5 w-5 text-green-600" animationType="bounce" />
                      </div>
                      <div>
                        <h3 className="font-bold">Convenient Locations</h3>
                        <p className="text-gray-500">
                          Multiple drop-off centers across Hong Kong for your convenience.
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <AnimatedIcon icon={Clock} className="h-5 w-5 text-green-600" animationType="pulse" />
                      </div>
                      <div>
                        <h3 className="font-bold">Flexible Hours</h3>
                        <p className="text-gray-500">Our centers are open 7 days a week from 8:00 AM to 6:00 PM.</p>
                      </div>
                    </motion.div>
                  </div>
                  <AnimatedButton asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/register?service=self-delivery">Register for Self-Delivery</Link>
                  </AnimatedButton>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.4}>
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
                    src="/placeholder.svg?height=550&width=550"
                    alt="Self-delivery service"
                    width={550}
                    height={550}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="collection" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
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
                    src="/placeholder.svg?height=550&width=550"
                    alt="Collection service"
                    width={550}
                    height={550}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.4}>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Option 2</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Collection Service</h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We collect food waste directly from your location at scheduled times. This option is ideal for
                    organizations that prefer convenience and don't have their own transportation.
                  </p>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <AnimatedIcon icon={Truck} className="h-5 w-5 text-green-600" animationType="bounce" />
                      </div>
                      <div>
                        <h3 className="font-bold">Convenient Pickup</h3>
                        <p className="text-gray-500">Our team collects food waste directly from your premises.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <AnimatedIcon icon={Calendar} className="h-5 w-5 text-green-600" animationType="pulse" />
                      </div>
                      <div>
                        <h3 className="font-bold">Regular Schedule</h3>
                        <p className="text-gray-500">
                          Set up a regular collection schedule that works for your organization.
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-full bg-green-100 p-2 mt-1">
                        <AnimatedIcon icon={DollarSign} className="h-5 w-5 text-green-600" animationType="pulse" />
                      </div>
                      <div>
                        <h3 className="font-bold">Competitive Rate</h3>
                        <p className="text-gray-500">Receive HK$0.30 per kilogram of food waste collected.</p>
                      </div>
                    </motion.div>
                  </div>
                  <AnimatedButton asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/register?service=collection">Register for Collection Service</Link>
                  </AnimatedButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Common questions about our food waste recycling services
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <AnimatedSection direction="up" delay={0.2}>
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xl font-bold">What types of food waste do you accept?</h3>
                  <p className="text-gray-500">
                    We accept most types of food waste including vegetable scraps, fruit peels, leftover cooked food,
                    bread, rice, and noodles. We do not accept raw meat, bones, or heavily contaminated food waste.
                  </p>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.3}>
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xl font-bold">How is the weight of food waste calculated?</h3>
                  <p className="text-gray-500">
                    All food waste is weighed at our facilities using calibrated scales. For self-delivery, weighing is
                    done upon arrival. For collection service, we use portable scales at your location.
                  </p>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xl font-bold">How often can we schedule collections?</h3>
                  <p className="text-gray-500">
                    Collections can be scheduled daily, weekly, or bi-weekly depending on your needs. We work with you
                    to establish the most efficient collection schedule.
                  </p>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.5}>
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xl font-bold">How is payment processed?</h3>
                  <p className="text-gray-500">
                    Payments are processed monthly. We provide a detailed report of all collections or deliveries,
                    including weights and amounts. Payments are made via bank transfer.
                  </p>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xl font-bold">Do you provide containers for food waste storage?</h3>
                  <p className="text-gray-500">
                    Yes, we provide specialized containers for food waste storage upon request. These containers are
                    designed to minimize odors and leakage. We also provide training on proper food waste segregation
                    and storage.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>
            <AnimatedSection direction="up" delay={0.7}>
              <div className="flex justify-center">
                <AnimatedButton asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Have More Questions? Contact Us</Link>
                </AnimatedButton>
              </div>
            </AnimatedSection>
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

