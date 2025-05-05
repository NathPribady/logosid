"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Podcast } from "../../lib/podcasts"

export default function PodcastList({ initialPodcasts }: { initialPodcasts: Podcast[] }) {
  const [podcasts] = useState(initialPodcasts)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredPodcasts =
    selectedCategory === "all" ? podcasts : podcasts.filter((podcast) => podcast.category === selectedCategory)

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
          {Array.from(new Set(podcasts.map((podcast) => podcast.category))).map((category) => (
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
        {filteredPodcasts.map((podcast: Podcast) => (
          <div key={podcast.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <Image
              src={podcast.image || "/placeholder.svg"}
              alt={podcast.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-red-600">{podcast.category}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(podcast.publish_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{podcast.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{podcast.description}</p>
              <Link
                href={podcast.audio_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Listen
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
