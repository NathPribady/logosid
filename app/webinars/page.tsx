import { Suspense } from "react"
import WebinarList from "./WebinarList"
import { SkeletonHeader, SkeletonGrid } from "../../components/SkeletonCard"

function WebinarSkeleton() {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkeletonHeader />
        <SkeletonGrid count={9} />
      </div>
    </div>
  )
}

export default function WebinarsPage() {
  return (
    <Suspense fallback={<WebinarSkeleton />}>
      <WebinarList />
    </Suspense>
  )
}
