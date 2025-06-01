import Link from "next/link"

interface FeaturedSectionProps {
  title: string
  link: string
}

export default function FeaturedSection({ title, link }: FeaturedSectionProps) {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-foreground mb-6">{title}</h2>
        <div className="bg-muted p-8 rounded-lg">
          {/* Placeholder content */}
          <p className="text-lg text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <Link
            href={link}
            className="inline-block bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
