import { Suspense } from "react"
import { getContent } from "../../lib/content"
import ContentList from "./ContentList"

export const revalidate = 3600

async function getData() {
  const content = await getContent()
  return { content }
}

function ContentSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-10 bg-gray-200 rounded-lg w-48 mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-96 animate-pulse"></div>
        </div>

        {/* Filter skeleton */}
        <div className="mb-8">
          <div className="h-6 bg-gray-200 rounded-lg w-40 mb-4 animate-pulse"></div>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-10 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-[4/5] bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-200 rounded w-20 mb-3 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function ContentPage() {
  const { content } = await getData()

  return (
    <Suspense fallback={<ContentSkeleton />}>
      <ContentList initialContent={content} />
    </Suspense>
  )
}
