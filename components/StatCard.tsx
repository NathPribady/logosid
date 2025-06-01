import type React from "react"
import { Users, Eye, BookOpen, UserCheck, type LightbulbIcon as LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  icon: "users" | "eye" | "book-open" | "user-check"
  className?: string
}

const iconMap: Record<StatCardProps["icon"], React.ElementType<LucideProps>> = {
  users: Users,
  eye: Eye,
  "book-open": BookOpen,
  "user-check": UserCheck,
}

export default function StatCard({ title, value, icon, className }: StatCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <div className={cn("card-base p-6 flex flex-col items-center text-center", className)}>
      <div className="bg-primary/10 p-3.5 rounded-full mb-4 inline-flex">
        <IconComponent className="w-7 h-7 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{value}</div>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  )
}
