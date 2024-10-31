"use client"
// components/navbar.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button" // assuming you have shadcn/ui button

const links = [
  {
    title: "About",
    href: "about",
  },
  {
    title: "Tokenomics",
    href: "tokenomics",
  },
  {
    title: "FAQs",
    href: "faq",
  },
  {
    title: "Blog",
    href: "https://blog.halal.io/",
  },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex justify-center w-full transition-all border-b bg-background/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4 max-w-14xl h-14">
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="flex items-center space-x-1.5">
            <Image
              src="/images/hdf-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
            <div className="flex items-center ml-3 text-xl font-bold">Halal <span className="ml-1 text-gradient_halal">DeFi</span></div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden gap-6 md:flex">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-lg font-medium transition-colors  hover:text-foreground/80 sm:text-sm text-foreground/60"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          className="hidden gap-2 md:flex"
          onClick={() =>
            window.open("https://getwaitlist.com/waitlist/8535", "_blank")
          }
        >
          Get Early Access
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
