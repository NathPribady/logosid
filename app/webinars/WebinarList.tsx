"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Webinar } from "../../lib/webinars"

export default function WebinarList({ initialWebinars }: { initialWebinars: Webinar[] }) {
  const [webinars] = useState(initialWebinars)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredWebinars =
    selectedCategory === "all" ? webinars : webinars.filter((webinar) => webinar.category === selectedCategory)

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <button
            key="all"
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "all"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            } hover:bg-red-600 hover:text-white transition-colors`}
          >
            All
          </button>
          {Array.from(new Set(webinars.map((webinar) => webinar.category))).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              } hover:bg-red-600 hover:text-white transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWebinars.map((webinar: Webinar) => (
          <div key={webinar.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <Image
              src={webinar.image || "/placeholder.svg"}
              alt={webinar.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-red-600">{webinar.category}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{webinar.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{webinar.description}</p>
              <Link
                href={webinar.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Watch Webinar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
