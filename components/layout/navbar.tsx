"use client"
import { client } from "@/lib/thirdweb.conf"
import { bsc, ethereum, arbitrum } from 'thirdweb/chains'
import { ConnectButton } from 'thirdweb/react'

// components/navbar.tsx
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../theme-toggle"

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
    <header className="sticky top-0 z-40 flex justify-center w-full transition-all bg-background/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-6 md:py-4 mx-4 max-w-14xl h-14">
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

        <ConnectButton
          client={client}
          theme="light"
          connectButton={{
            style: {
              padding: "0.75rem 1rem",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: "600",
              background: "linear-gradient(to right, #D18411, #E8C375)",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              willChange: "transform",
              transition: "all 300ms ease"
            },
          }}
          
          detailsButton={{
            style: {
              background: "oldlace",
              color: "white",
              borderRadius: "8px",
              padding: "4px 8px",
            }
          }
              }
          appMetadata={{
            name: 'Halal IO',
            url: 'https://halal.io',
          }}
          chains={[ethereum, arbitrum, bsc]}
        />
      </div>
      {/* for dark theme */}
      {/* <ModeToggle /> */}
    </header>
  )
}
