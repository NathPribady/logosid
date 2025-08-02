"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { getContent } from "../../lib/content"
import { getCategories } from "../../lib/categories"

interface Content {
  id: number
  title: string
  description: string
  image: string
  category: string
  content_url?: string
}

interface Category {
  id: number
  name: string
}

export default function ContentList() {
  const [content, setContent] = useState<Content[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [contentData, categoriesData] = await Promise.all([getContent(), getCategories()])
        setContent(contentData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredContent =
    selectedCategory === "Semua" ? content : content.filter((item) => item.category === selectedCategory)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Konten Edukatif</h1>
          <p className="text-lg text-gray-600">
            Baca artikel dan konten edukatif berkualitas tentang berbagai topik pembelajaran.
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredContent.length > 0 ? (
            filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.content_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.image || `/placeholder.svg?height=500&width=400&query=article+${item.title}`}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                  <div className="mt-4">
                    <span className="text-primary font-medium text-sm">Baca Selengkapnya →</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">Tidak ada konten ditemukan untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
