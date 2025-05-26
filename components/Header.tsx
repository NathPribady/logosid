"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg md:hidden transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">Menu</span>
            </button>
            <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
              Logos ID
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/webinars"
              className="text-sm font-medium hover:text-red-600 transition-colors simple-underline"
            >
              WEBINARS
            </Link>
            <Link
              href="/podcasts"
              className="text-sm font-medium hover:text-red-600 transition-colors simple-underline"
            >
              PODCASTS
            </Link>
            <Link href="/content" className="text-sm font-medium hover:text-red-600 transition-colors simple-underline">
              CONTENT
            </Link>
            <Link
              href="https://mayar.gg/logos-id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md"
              style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
            >
              SUPPORT US
            </Link>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/webinars"
                className="text-sm font-medium hover:text-red-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                WEBINARS
              </Link>
              <Link
                href="/podcasts"
                className="text-sm font-medium hover:text-red-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                PODCASTS
              </Link>
              <Link
                href="/content"
                className="text-sm font-medium hover:text-red-600 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTENT
              </Link>
              <Link
                href="https://mayar.gg/logos-id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md inline-block"
                style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
                onClick={() => setIsMenuOpen(false)}
              >
                SUPPORT US
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
