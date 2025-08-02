export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="relative aspect-[4/5] bg-gray-200 animate-pulse"></div>
      <div className="p-6">
        <div className="w-20 h-5 bg-gray-200 rounded-full mb-3 animate-pulse"></div>
        <div className="w-full h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="w-2/3 h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
}
