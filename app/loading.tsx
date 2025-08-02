import SkeletonGrid from "@/components/SkeletonGrid"
import SkeletonHeader from "@/components/SkeletonHeader"

export default function Loading() {
  return (
    <div className="min-h-screen">
      <SkeletonHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <SkeletonGrid count={9} />
      </div>
    </div>
  )
}
