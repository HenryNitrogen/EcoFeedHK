import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
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
              className="h-6 w-6 text-green-600"
            >
              <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
              <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
              <path d="m14 16-3 3 3 3" />
              <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
              <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
              <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
            </svg>
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our food waste recycling program? Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                  <p className="text-gray-500">
                    Our team is here to answer your questions about our food waste recycling program. Whether you're
                    interested in joining or have questions about our process, we're here to help.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 mt-1">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Our Location</h3>
                      <p className="text-gray-500">123 Eco Street, Kowloon, Hong Kong</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 mt-1">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-gray-500">info@ecofeedhk.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2 mt-1">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-gray-500">+852 1234 5678</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Office Hours</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>9:00 AM - 1:00 PM</div>
                    <div>Sunday & Public Holidays</div>
                    <div>Closed</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Recycling Center Locations</h3>
                  <div className="grid gap-4">
                    <div>
                      <h4 className="font-bold">Kowloon Center</h4>
                      <p className="text-gray-500">123 Eco Street, Kowloon</p>
                    </div>
                    <div>
                      <h4 className="font-bold">New Territories Center</h4>
                      <p className="text-gray-500">456 Green Road, Sha Tin</p>
                    </div>
                    <div>
                      <h4 className="font-bold">Hong Kong Island Center</h4>
                      <p className="text-gray-500">789 Recycle Avenue, North Point</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <Input id="organization" placeholder="Enter your organization name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter message subject" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about our food waste recycling services
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do I join the food waste recycling program?</h3>
                <p className="text-gray-500">
                  You can join our program by filling out the registration form on our website or contacting our team
                  directly. We'll guide you through the process and help you choose the best service option for your
                  needs.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How is payment processed?</h3>
                <p className="text-gray-500">
                  Payments are processed monthly. We provide a detailed report of all collections or deliveries,
                  including weights and amounts. Payments are made via bank transfer to your designated account.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What types of food waste do you accept?</h3>
                <p className="text-gray-500">
                  We accept most types of food waste including vegetable scraps, fruit peels, leftover cooked food,
                  bread, rice, and noodles. We do not accept raw meat, bones, or heavily contaminated food waste.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you provide containers for food waste storage?</h3>
                <p className="text-gray-500">
                  Yes, we provide specialized containers for food waste storage upon request. These containers are
                  designed to minimize odors and leakage. We also provide training on proper food waste segregation and
                  storage.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I change my service option later?</h3>
                <p className="text-gray-500">
                  Yes, you can change between self-delivery and collection service options with notice. Please contact
                  our team to discuss your changing needs and we'll be happy to accommodate you.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/register">Register Now</Link>
              </Button>
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
                <li className="text-green-200">123 Eco Street, Kowloon</li>
                <li className="text-green-200">Hong Kong</li>
                <li className="text-green-200">info@ecofeedhk.com</li>
                <li className="text-green-200">+852 1234 5678</li>
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
                <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
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

