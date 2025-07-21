"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { getWebinars } from "../../lib/webinars"
import { getCategories } from "../../lib/categories"

interface Webinar {
  id: number
  title: string
  description: string
  image: string
  category: string
  link?: string
}

interface Category {
  id: number
  name: string
}

export default function WebinarList() {
  const [webinars, setWebinars] = useState<Webinar[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [webinarsData, categoriesData] = await Promise.all([getWebinars(), getCategories()])
        setWebinars(webinarsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredWebinars =
    selectedCategory === "Semua" ? webinars : webinars.filter((webinar) => webinar.category === selectedCategory)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Webinar</h1>
          <p className="text-lg text-gray-600 mb-8">
            Jelajahi berbagai webinar kami tentang sains, filsafat, politik, dan sejarah.
          </p>

          {/* Filter Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter berdasarkan Kategori</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("Semua")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === "Semua"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-primary/50"
                }`}
              >
                Semua
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-primary/50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Webinar Grid */}
        {filteredWebinars.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada webinar ditemukan untuk kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar) => (
              <Link
                key={webinar.id}
                href={webinar.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={webinar.image || `/placeholder.svg?height=500&width=400&query=webinar+${webinar.title}`}
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
                  <p className="text-gray-600 text-sm line-clamp-3">{webinar.description}</p>
                  <div className="mt-4">
                    <span className="text-primary font-medium text-sm">Tonton Webinar →</span>
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
