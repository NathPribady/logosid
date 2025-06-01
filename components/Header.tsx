"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call on mount to set initial state based on scroll position

    // Lock body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup function to remove event listener and reset body overflow
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen]) // Re-run effect if isMenuOpen changes

  // Navigation link styles based on the screenshot (pink text)
  const navLinkClasses = cn(
    "py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-150 nav-link",
  )
  // Mobile navigation link styles
  const mobileNavLinkClasses =
    "block py-3 px-4 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors duration-150"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
        scrolled || isMenuOpen
          ? "bg-muted/95 backdrop-blur-sm shadow-header border-b border-border/50" // Scrolled: light gray bg, subtle shadow
          : "bg-transparent border-b border-transparent", // Initial: transparent
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity duration-150"
          >
            Logos ID
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            <Link href="/webinars" className={navLinkClasses}>
              WEBINAR
            </Link>
            <Link href="/podcasts" className={navLinkClasses}>
              PODCAST
            </Link>
            <Link href="/content" className={navLinkClasses}>
              KONTEN
            </Link>
            <Link
              href="https://mayar.gg/logos-id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-md ml-3" // Solid pink "Support Us" button
            >
              SUPPORT US
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost btn-icon p-2 text-primary" // Pink menu icon
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-background z-40", // Covers screen below header
          isMenuOpen ? "block" : "hidden", // Simple show/hide
          "overflow-y-auto p-4 pt-6", // Padding for content within mobile menu
        )}
      >
        <nav className="container flex flex-col space-y-2">
          <Link href="/webinars" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
            WEBINAR
          </Link>
          <Link href="/podcasts" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
            PODCAST
          </Link>
          <Link href="/content" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
            KONTEN
          </Link>
          {/* Separator and "Support Us" button in mobile menu */}
          <div className="pt-5 mt-3 border-t border-border">
            <Link
              href="https://mayar.gg/logos-id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full" // Full-width pink button
              onClick={() => setIsMenuOpen(false)}
            >
              SUPPORT US
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
