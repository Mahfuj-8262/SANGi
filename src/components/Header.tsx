"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-stone-50 text-black shadow sticky top-0 z-50"
      style={{ fontFamily: "'Golos Text', sans-serif" }}
    >
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-2xl text-amber-300 tracking-tight mr-2 md:mr-4 xl:mr-6"
        >
          <div className="relative h-12 w-auto flex items-center">
            <Image
              src="/Logo 27.png"
              alt="Sangi Group Logo"
              width={160}
              height={60}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-0.5 md:gap-1 lg:gap-2 xl:gap-4 text-sm lg:text-base whitespace-nowrap ml-3 md:ml-5 lg:ml-8">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className="px-2 md:px-3 py-1 rounded-md hover:bg-slate-500 transition-colors"
              >
                {link.text}
              </Link>
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <Link href="/contact">
              <Button
                size="sm"
                className="ml-2 bg-amber-400 text-slate-900 hover:bg-amber-500"
              >
                Get in Touch
              </Button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-slate-500 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex justify-end">
          <div
            className="absolute inset-0 bg-slate-950/70 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          <nav
            className="relative bg-slate-700 w-64 h-full p-6 shadow-lg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-6"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="h-8 w-8 text-slate-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="flex flex-col gap-4 text-base">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="block px-2 py-2 rounded hover:bg-slate-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-amber-400 text-slate-900 hover:bg-amber-500 mt-3"
                    size="sm"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}