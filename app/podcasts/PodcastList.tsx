"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { getPodcasts } from "../../lib/podcasts"
import { getCategories } from "../../lib/categories"

interface Podcast {
  id: number
  title: string
  description: string
  image: string
  category: string
  audio_url?: string
}

interface Category {
  id: number
  name: string
}

export default function PodcastList() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [podcastsData, categoriesData] = await Promise.all([getPodcasts(), getCategories()])
        setPodcasts(podcastsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredPodcasts =
    selectedCategory === "Semua" ? podcasts : podcasts.filter((podcast) => podcast.category === selectedCategory)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Podcast</h1>
          <p className="text-lg text-gray-600">
            Dengarkan diskusi mendalam tentang berbagai topik edukatif dan pemikiran kritis.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter berdasarkan Kategori</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("Semua")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === "Semua"
                  ? "bg-primary text-white"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-primary/50"
              }`}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.name
                    ? "bg-primary text-white"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-primary/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredPodcasts.length > 0 ? (
            filteredPodcasts.map((podcast) => (
              <Link
                key={podcast.id}
                href={podcast.audio_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={podcast.image || `/placeholder.svg?height=500&width=400&query=podcast+${podcast.title}`}
                    alt={podcast.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-pink-50 px-2 py-1 rounded-full">
                    {podcast.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{podcast.description}</p>
                  <div className="mt-4">
                    <span className="text-primary font-medium text-sm">Dengarkan Podcast →</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">Tidak ada podcast ditemukan untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
