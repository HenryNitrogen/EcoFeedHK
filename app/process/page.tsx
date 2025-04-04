"use client"

import Link from "next/link"
import Image from "next/image"
import { Recycle, FlaskRoundIcon as Flask, Building, Truck, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedIcon } from "@/components/animated-icon"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedProcessStep } from "@/components/animated-process-step"
import { motion } from "framer-motion"

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="EcoFeed Icon" width={24} height={24} className="h-6 w-6"/>
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h1>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    How we transform food waste into high-quality fertilizer
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Waste to Feed</h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our innovative process transforms food waste from canteens and schools into nutritious fertilizer.
                    This not only reduces waste going to landfills but also creates a valuable resource for local farms.
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
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Environmentally Friendly</h3>
                        <p className="text-gray-500">Our process reduces greenhouse gas emissions from landfills.</p>
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
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Circular Economy</h3>
                        <p className="text-gray-500">
                          We create value from waste, supporting a circular economy in Hong Kong.
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
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">Quality Assured</h3>
                        <p className="text-gray-500">
                          Rigorous testing ensures our fertilizer meets all safety standards.
                        </p>
                      </div>
                    </motion.div>
                  </div>
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
                    src="/me.png"
                    alt="Food waste recycling process"
                    width={550}
                    height={550}
                    className="mx-auto rounded-xl object-contain w-full h-auto"
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Step-by-Step Process</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    How we transform food waste into high-quality fertilizer
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <AnimatedProcessStep
                  icon={Truck}
                  title="Collection"
                  description="Food waste is collected from canteens and schools across Hong Kong, either through our collection service or self-delivery."
                  step={1}
                  delay={0.1}
                />
                <AnimatedProcessStep
                  icon={Recycle}
                  title="Sorting"
                  description="The collected food waste is carefully sorted to remove any non-food contaminants such as plastic, metal, or packaging materials."
                  step={2}
                  delay={0.3}
                />
                <AnimatedProcessStep
                  icon={Flask}
                  title="Testing"
                  description="Rigorous testing is conducted to ensure the food waste is clean and safe for processing into fertilizer."
                  step={3}
                  delay={0.5}
                />
                <AnimatedProcessStep
                  icon={Building}
                  title="Processing"
                  description="The clean food waste is processed into nutritious fertilizer using our specialized equipment and techniques."
                  step={4}
                  delay={0.7}
                />
              </div>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    transition: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <ArrowRight className="h-8 w-8 text-green-600" />
                </motion.div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimatedProcessStep
                  icon={Flask}
                  title="Quality Control"
                  description="The processed fertilizer undergoes quality control checks to ensure it meets all safety and nutritional standards."
                  step={5}
                  delay={0.1}
                />
                <AnimatedProcessStep
                  icon={Building}
                  title="Packaging"
                  description="The fertilizer is packaged in eco-friendly containers, ready for distribution to local farms."
                  step={6}
                  delay={0.3}
                />
                <AnimatedProcessStep
                  icon={Truck}
                  title="Distribution"
                  description="The high-quality fertilizer is distributed to local farms, completing the circular economy cycle."
                  step={7}
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cleanliness Testing Methods</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ensuring the highest quality and safety standards
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection direction="up" delay={0.1}>
                <AnimatedCard>
                  <Card>
                    <CardHeader>
                      <CardTitle>Visual Inspection</CardTitle>
                      <CardDescription>First line of quality control</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Our trained staff visually inspect the food waste for non-food contaminants such as plastic,
                        metal, or packaging materials. This initial screening helps ensure only appropriate materials
                        enter our processing system.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.2}>
                <AnimatedCard>
                  <Card>
                    <CardHeader>
                      <CardTitle>Moisture Content Testing</CardTitle>
                      <CardDescription>Preventing spoilage</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        We measure the water content of the food waste to ensure it isn't too wet, which could spoil the
                        feed or affect its quality. Optimal moisture levels are maintained throughout the processing.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.3}>
                <AnimatedCard>
                  <Card>
                    <CardHeader>
                      <CardTitle>pH Testing</CardTitle>
                      <CardDescription>Ensuring safety</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        We test the acidity level of the food waste to prevent spoilage and ensure it is safe for
                        processing. This helps maintain the quality and safety of the final fertilizer product.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <AnimatedCard>
                  <Card>
                    <CardHeader>
                      <CardTitle>Microbial Testing</CardTitle>
                      <CardDescription>Detecting harmful organisms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Samples are tested for harmful bacteria or pathogens that could harm animals if present in the
                        feed. Our laboratory conducts thorough microbial analysis to ensure safety.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.5}>
                <AnimatedCard>
                  <Card>
                    <CardHeader>
                      <CardTitle>Chemical Residue Testing</CardTitle>
                      <CardDescription>Checking for contaminants</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        We check for traces of harmful chemicals (e.g., cleaning agents or pesticides) to ensure the
                        feed meets safety standards. This comprehensive testing guarantees a clean, safe product.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <AnimatedCard>
                  <Card>
                    <CardHeader>
                      <CardTitle>Nutritional Analysis</CardTitle>
                      <CardDescription>Ensuring feed quality</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        The final feed undergoes nutritional analysis to ensure it provides appropriate nutritional
                        value for animals. We test for protein content, fats, carbohydrates, and essential nutrients.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
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
                    src="/join.png"
                    alt="Join our recycling program"
                    width={550}
                    height={550}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.4}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Recycling Program Today</h2>
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

