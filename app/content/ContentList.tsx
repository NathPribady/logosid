"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Content } from "../../lib/content"

export default function ContentList({ initialContent }: { initialContent: Content[] }) {
  const [content] = useState(initialContent)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredContent =
    selectedCategory === "all" ? content : content.filter((item) => item.category === selectedCategory)

  return (
    <>
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
          {Array.from(new Set(content.map((item) => item.category))).map((category) => (
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
        {filteredContent.map((item: Content) => (
          <div key={item.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-red-600">{item.category}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.publish_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
              <Link
                href={item.content_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
