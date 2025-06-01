"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Content } from "../../lib/content"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export default function ContentList({ initialContent }: { initialContent: Content[] }) {
  const [contentItems] = useState(initialContent)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(contentItems.map((item) => item.category)))]

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredContent =
    selectedCategory === "all" ? contentItems : contentItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="container section-padding pt-20 md:pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Konten Edukatif</h1>
      <p className="text-slate-600 mb-8 max-w-xl">
        Temukan artikel, panduan, dan sumber belajar lainnya untuk memperluas pengetahuan Anda.
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
      {filteredContent.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item: Content) => (
            <Link
              key={item.id}
              href={item.content_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block card-base overflow-hidden hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg?height=225&width=400&query=content+thumbnail"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm mb-1.5 inline-block bg-yellow-400 text-yellow-900">
                  {item.category}
                </span>
                <h3 className="text-md font-semibold text-slate-800 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3 mb-2.5 leading-normal">{item.description}</p>
                <div className="text-sm text-primary group-hover:underline flex items-center font-medium">
                  Baca Selengkapnya{" "}
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 py-10">Tidak ada konten ditemukan untuk kategori ini.</p>
      )}
    </div>
  )
}
