"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { bsc, ethereum, arbitrum } from "thirdweb/chains";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/thirdweb.conf";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export function NavMobile() {
  const [open, setOpen] = useState(false);

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className={cn(
          "fixed right-2 top-2.5 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
          open && "hover:bg-muted active:bg-muted"
        )}
      >
        {open ? (
          <X className="size-5 text-muted-foreground" />
        ) : (
          <Menu className="size-5 text-muted-foreground" />
        )}
      </button>

      <nav
        className={cn(
          "fixed inset-0 z-40 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden",
          open && "block"
        )}
      >
        <ul className="grid divide-y divide-muted">
          {links &&
            links.length > 0 &&
            links.map(({ title, href }) => (
              <li key={title} className="py-3">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  {title}
                </Link>
              </li>
            ))}
          <li>
            <div className="mt-4">
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
          </li>
        </ul>
      </nav>
    </>
  );
}
