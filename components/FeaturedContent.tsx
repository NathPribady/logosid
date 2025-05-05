import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeaturedItem {
  title: string
  image: string
  category: string
  description: string
  link: string
}

interface FeaturedContentProps {
  title: string
  link: string
  items: FeaturedItem[]
}

export default function FeaturedContent({ title, link, items }: FeaturedContentProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          <Link href={link} className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index === 2 ? "hidden sm:block" : ""}`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm font-medium text-red-600 mb-2 block">{item.category}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <Link href={item.link} className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
