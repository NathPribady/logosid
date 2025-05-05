import { Users, Eye, BookOpen, UserCheck } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  icon: "users" | "eye" | "book-open" | "user-check"
}

const iconMap = {
  users: Users,
  eye: Eye,
  "book-open": BookOpen,
  "user-check": UserCheck,
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  const Icon = iconMap[icon]

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center text-center"
      style={{ borderRadius: "0.5rem" }} /* Inline style as a fallback */
    >
      <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-full mb-2">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{title}</div>
    </div>
  )
}
