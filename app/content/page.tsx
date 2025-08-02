import { Suspense } from "react"
import ContentList from "./ContentList"
import SkeletonHeader from "@/components/SkeletonHeader"
import SkeletonGrid from "@/components/SkeletonGrid"

export default function ContentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <SkeletonHeader />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <SkeletonGrid count={9} />
          </div>
        </div>
      }
    >
      <ContentList />
    </Suspense>
  )
}
