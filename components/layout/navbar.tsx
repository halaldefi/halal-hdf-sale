"use client";
import { client } from "@/lib/thirdweb.conf";
import { bsc, ethereum, arbitrum } from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";

// components/navbar.tsx
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "About",
    href: "https://halal.io/about",
  },
  {
    title: "Tokenomics",
    href: "https://halal.io/tokenomics",
  },
  {
    title: "FAQs",
    href: "https://halal.io/faq",
  },
  {
    title: "Blog",
    href: "https://blog.halal.io/",
  },
];

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
            <div className="flex items-center ml-3 text-xl font-bold">
              Halal <span className="ml-1 text-gradient_halal">DeFi</span>
            </div>
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

        <div className="hidden lg:block">
          <ConnectButton
            client={client}
            theme="light"
            connectButton={{
              style: {
                background: "linear-gradient(to right, #B4AFF4, #EAAA7C)",
                color: "white",
                borderRadius: "8px",
                padding: "12px 16px",
              },
            }}
            detailsButton={{
              style: {
                background: "oldlace",
                color: "white",
                borderRadius: "8px",
                padding: "4px 8px",
              },
            }}
            appMetadata={{
              name: "Halal IO",
              url: "https://halal.io",
            }}
            chains={[ethereum, arbitrum, bsc]}
          />
        </div>
      </div>
      {/* for dark theme */}
      {/* <ModeToggle /> */}
    </header>
  );
}
