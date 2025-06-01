import { Suspense } from "react"
import { getPodcasts } from "../../lib/podcasts"
import { getCategoriesForType } from "../../lib/categories"
import PodcastList from "./PodcastList"

export const revalidate = 3600 // Revalidate every hour

async function getData() {
  const [podcasts, categories] = await Promise.all([getPodcasts(), getCategoriesForType("podcasts")])
  return { podcasts, categories }
}

export default async function PodcastsPage() {
  const { podcasts, categories } = await getData()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50">
      <Suspense fallback={<PodcastSkeleton />}>
        <PodcastList initialPodcasts={podcasts} />
      </Suspense>
    </div>
  )
}

function PodcastSkeleton() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
