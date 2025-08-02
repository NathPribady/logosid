export default function SkeletonHeader() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description Skeleton */}
        <div className="text-center mb-12">
          <div className="w-48 h-10 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Filter Buttons Skeleton */}
        <div className="mb-12">
          <div className="w-40 h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="w-20 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
