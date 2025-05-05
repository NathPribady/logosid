import { supabase } from "./supabase"

export interface Content {
  id: number
  created_at: string
  title: string
  description: string
  category: string
  image: string
  content_url: string
  publish_date: string
}

export async function getContent() {
  const { data, error } = await supabase.from("content").select("*").order("publish_date", { ascending: false })

  if (error) {
    console.error("Error fetching content:", error)
    throw error
  }

  return data as Content[]
}
