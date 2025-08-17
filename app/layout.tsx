import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Link from "next/link"
import { Twitter, Instagram, Youtube, Music, Linkedin } from "lucide-react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Logos ID - Platform Pendidikan Berkualitas",
  description:
    "Platform pendidikan yang memberdayakan pikiran melalui sains, filsafat, politik & sejarah. Webinar, podcast, dan konten edukatif berkualitas tinggi.",
    generator: 'v0.app'
}

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/logos_id", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/_logosid", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@LogosID", icon: Youtube },
  { name: "Spotify", href: "https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML", icon: Music },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/logos-id", icon: Linkedin },
]

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Logos ID</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Memberdayakan pikiran melalui pendidikan. Kami menyediakan webinar, podcast, dan konten edukatif
              berkualitas tinggi untuk mengembangkan pemikiran kritis dan wawasan mendalam.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/webinars" className="text-gray-300 hover:text-white transition-colors">
                  Webinar
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-gray-300 hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/content" className="text-gray-300 hover:text-white transition-colors">
                  Konten Edukatif
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dukungan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://mayar.gg/logos-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Donasi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Logos ID. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
