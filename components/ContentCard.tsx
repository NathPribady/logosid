interface ContentCardProps {
  title: string
  description: string
  category: string
}

export default function ContentCard({ title, description, category }: ContentCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <span className="inline-block bg-primary/10 text-primary text-sm px-2 py-1 rounded-full">{category}</span>
    </div>
  )
}
