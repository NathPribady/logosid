import Link from "next/link"

interface FeaturedSectionProps {
  title: string
  link: string
}

export default function FeaturedSection({ title, link }: FeaturedSectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">{title}</h2>
        <div className="bg-gray-100 p-8 rounded-lg">
          {/* Placeholder content */}
          <p className="text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <Link
            href={link}
            className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
