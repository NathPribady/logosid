import type React from "react"
import { Twitter, Instagram, Youtube, Music } from "lucide-react"
import Link from "next/link"

export default function SocialMediaSection() {
  return (
    <section id="connect" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Connect With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SocialMediaCard
            icon={<Twitter className="w-8 h-8" />}
            platform="Twitter"
            handle="@logos_id"
            url="https://twitter.com/logos_id"
            bgColor="bg-blue-400"
          />
          <SocialMediaCard
            icon={<Instagram className="w-8 h-8" />}
            platform="Instagram"
            handle="@_logosid"
            url="https://instagram.com/_logosid"
            bgColor="bg-pink-500"
          />
          <SocialMediaCard
            icon={<Youtube className="w-8 h-8" />}
            platform="YouTube"
            handle="Logos ID"
            url="https://www.youtube.com/@LogosID"
            bgColor="bg-red-500"
          />
          <SocialMediaCard
            icon={<Music className="w-8 h-8" />}
            platform="Spotify"
            handle="Logos ID"
            url="https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML"
            bgColor="bg-green-500"
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
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`${bgColor} text-white rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
        style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
      >
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{platform}</h3>
        <p>{handle}</p>
      </div>
    </Link>
  )
}
