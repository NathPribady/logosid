import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Header } from "../components/Header"
import { cn } from "@/lib/utils"
import { Twitter, Instagram, Youtube, Music, Linkedin } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Logos ID - Empowering Minds Through Education",
  description: "A non-profit educational platform providing webinars, podcasts, and educational content.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="light">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <Header />
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

const socialLinksFooter = [
  { name: "Twitter", href: "https://twitter.com/logos_id", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/_logosid", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@LogosID", icon: Youtube },
  { name: "Spotify", href: "https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML", icon: Music },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/logos-id", icon: Linkedin },
]

function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tentang Logos ID</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Memberdayakan pikiran melalui pendidikan. Kami menyediakan konten edukatif berkualitas tinggi, webinar,
              dan podcast.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/webinars" className="text-sm text-slate-300 hover:text-primary transition-colors">
                  Webinar
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-sm text-slate-300 hover:text-primary transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/content" className="text-sm text-slate-300 hover:text-primary transition-colors">
                  Konten Edukatif
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Terhubung dengan Kami</h3>
            <div className="flex space-x-4">
              {socialLinksFooter.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Logos ID. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
