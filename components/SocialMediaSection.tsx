import type React from "react"
import { Twitter, Instagram, Youtube, Music } from "lucide-react"
import Link from "next/link"

export default function SocialMediaSection() {
  return (
    <section id="connect" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Connect With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SocialMediaCard
            icon={<Twitter className="w-8 h-8" />}
            platform="Twitter"
            handle="@logos_id"
            url="https://twitter.com/logos_id"
            bgColor="bg-accent"
          />
          <SocialMediaCard
            icon={<Instagram className="w-8 h-8" />}
            platform="Instagram"
            handle="@_logosid"
            url="https://instagram.com/_logosid"
            bgColor="bg-accent-light-pink"
          />
          <SocialMediaCard
            icon={<Youtube className="w-8 h-8" />}
            platform="YouTube"
            handle="Logos ID"
            url="https://www.youtube.com/@LogosID"
            bgColor="bg-primary"
          />
          <SocialMediaCard
            icon={<Music className="w-8 h-8" />}
            platform="Spotify"
            handle="Logos ID"
            url="https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML"
            bgColor="bg-accent-dark-pink"
          />
        </div>
      </div>
    </section>
  )
}

interface SocialMediaCardProps {
  icon: React.ReactNode
  platform: string
  handle: string
  url: string
  bgColor: string
}

function SocialMediaCard({ icon, platform, handle, url, bgColor }: SocialMediaCardProps) {
  let textColor = "text-white"
  if (bgColor === "bg-accent") {
    textColor = "text-accent-foreground"
  } else if (bgColor === "bg-primary") {
    textColor = "text-primary-foreground"
  }

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`${bgColor} ${textColor} rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
      >
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{platform}</h3>
        <p>{handle}</p>
      </div>
    </Link>
  )
}
