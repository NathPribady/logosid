import { SkeletonHeader, SkeletonGrid } from "../components/SkeletonCard"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section skeleton */}
        <SkeletonHeader />

        {/* Search section skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8 animate-pulse"></div>
          <div className="max-w-md mx-auto">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Cards section skeleton */}
        <SkeletonGrid count={6} />
      </div>
    </div>
  )
}
