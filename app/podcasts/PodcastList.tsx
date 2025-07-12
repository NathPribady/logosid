"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Podcast } from "../../lib/podcasts"
import { cn } from "@/lib/utils"
import { PlayCircle } from "lucide-react"

export default function PodcastList({ initialPodcasts }: { initialPodcasts: Podcast[] }) {
  const [podcasts] = useState(initialPodcasts)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(podcasts.map((podcast) => podcast.category)))]

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredPodcasts =
    selectedCategory === "all" ? podcasts : podcasts.filter((podcast) => podcast.category === selectedCategory)

  return (
    <div className="container section-padding pt-20 md:pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Podcast</h1>
      <p className="text-slate-600 mb-8 max-w-xl">
        Dengarkan diskusi mendalam dan wawasan dari para ahli di berbagai bidang.
      </p>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3 text-slate-800">Filter berdasarkan Kategori</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                selectedCategory === category
                  ? "bg-primary text-white shadow-sm" // White text on primary background
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-primary/50", // Dark text on light background
              )}
            >
              {category === "all" ? "Semua" : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {filteredPodcasts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPodcasts.map((podcast: Podcast) => (
            <Link
              key={podcast.id}
              href={podcast.audio_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block card-base overflow-hidden hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={podcast.image || "/placeholder.svg?height=500&width=400&query=podcast+thumbnail"}
                  alt={podcast.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-10 h-10 text-white/70" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm inline-block bg-primary text-white">
                    {podcast.category}
                  </span>
                  <p className="text-xs text-slate-500">
                    {new Date(podcast.publish_date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <h3 className="text-md font-semibold text-slate-800 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {podcast.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 leading-normal">{podcast.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 py-10">Tidak ada podcast ditemukan untuk kategori ini.</p>
      )}
    </div>
  )
}
