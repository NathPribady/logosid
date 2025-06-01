import { Suspense } from "react"
import { getWebinars } from "../../lib/webinars"
import WebinarList from "./WebinarList"

export const revalidate = 3600 // Revalidate every hour

async function getData() {
  const webinars = await getWebinars()
  return { webinars }
}

export default async function WebinarsPage() {
  const { webinars } = await getData()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50">
      <Suspense fallback={<WebinarSkeleton />}>
        <WebinarList initialWebinars={webinars} />
      </Suspense>
    </div>
  )
}

function WebinarSkeleton() {
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
