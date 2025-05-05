interface ContentCardProps {
  title: string
  description: string
  category: string
}

export default function ContentCard({ title, description, category }: ContentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded">{category}</span>
    </div>
  )
}
