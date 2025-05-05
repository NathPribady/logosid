import { Suspense } from "react"
import { getContent } from "../../lib/content"
import { getCategoriesForType } from "../../lib/categories"
import ContentList from "./ContentList"

export const revalidate = 3600 // Revalidate every hour

async function getData() {
  const [content, categories] = await Promise.all([getContent(), getCategoriesForType("content")])
  return { content, categories }
}

export default async function ContentPage() {
  const { content, categories } = await getData()

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">Educational Content</h1>

      <Suspense fallback={<ContentSkeleton />}>
        <ContentList initialContent={content} />
      </Suspense>
    </div>
  )
}

function ContentSkeleton() {
  return (
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
  )
}
