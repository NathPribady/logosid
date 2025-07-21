"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Webinar } from "../../lib/webinars"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export default function WebinarList({ initialWebinars }: { initialWebinars: Webinar[] }) {
  const [webinars] = useState(initialWebinars)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(webinars.map((webinar) => webinar.category)))]

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredWebinars =
    selectedCategory === "all" ? webinars : webinars.filter((webinar) => webinar.category === selectedCategory)

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Webinar</h1>
          <p className="text-lg text-gray-600">
            Jelajahi berbagai webinar kami tentang sains, filsafat, politik, dan sejarah.
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

        {/* Webinars Grid */}
        {filteredWebinars.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada webinar ditemukan untuk kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar: Webinar) => (
              <Link
                key={webinar.id}
                href={webinar.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={webinar.image || "/placeholder.svg?height=500&width=400&query=webinar+thumbnail"}
                    alt={webinar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-pink-50 px-2 py-1 rounded-full">
                    {webinar.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{webinar.description}</p>
                  <div className="text-sm text-primary font-medium inline-flex items-center">
                    Tonton Webinar
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
