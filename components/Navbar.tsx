"use client";

import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Mission" },
  { href: "/technology", label: "Technology" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-navy/90 backdrop-blur-xl">
      <div className="site-header-row mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <BrandLogo onClick={() => setOpen(false)} />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? "bg-white/8 text-white"
                  : "text-surf-mist hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden shrink-0 rounded-xl bg-surf-teal px-4 py-2 text-sm font-bold text-navy transition hover:bg-surf-teal/90 sm:px-5 md:inline-flex"
          >
            Get in touch
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-white/8 bg-navy/95 px-4 py-4 md:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-white/8 text-white"
                      : "text-surf-mist hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="mt-2 block rounded-xl bg-surf-teal px-4 py-3 text-center text-sm font-bold text-navy"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
