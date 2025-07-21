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
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Podcast</h1>
          <p className="text-lg text-gray-600">
            Dengarkan diskusi mendalam dan wawasan dari para ahli di berbagai bidang.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter berdasarkan Kategori</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
                )}
              >
                {category === "all" ? "Semua" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Podcasts Grid */}
        {filteredPodcasts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada podcast ditemukan untuk kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPodcasts.map((podcast: Podcast) => (
              <Link
                key={podcast.id}
                href={podcast.audio_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={podcast.image || "/placeholder.svg?height=500&width=400&query=podcast+thumbnail"}
                    alt={podcast.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-pink-50 px-2 py-1 rounded-full">
                      {podcast.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(podcast.publish_date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{podcast.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
