import { supabase } from "./supabase"

export interface Webinar {
  id: number
  created_at: string
  title: string
  description: string
  category: string
  image: string
  date: string
  link: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getWebinars(retries = 3): Promise<Webinar[]> {
  try {
    const { data, error } = await supabase.from("webinars").select("*").order("date", { ascending: false })

    if (error) {
      console.error("Error fetching webinars:", error)
      throw error
    }

    if (!data) {
      throw new Error("No data returned from Supabase")
    }

    return data as Webinar[]
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`)
      await delay(1000)
      return getWebinars(retries - 1)
    } else {
      console.error("Max retries reached. Error fetching webinars:", error)
      throw error
    }
  }
}

export async function createWebinar(webinar: Omit<Webinar, "id" | "created_at">): Promise<Webinar> {
  const { data, error } = await supabase.from("webinars").insert(webinar).select().single()

  if (error) {
    console.error("Error creating webinar:", error)
    throw error
  }

  return data
}

export async function updateWebinar(id: number, updates: Partial<Webinar>): Promise<Webinar> {
  const { data, error } = await supabase.from("webinars").update(updates).eq("id", id).select().single()

  if (error) {
    console.error("Error updating webinar:", error)
    throw error
  }

  return data
}

export async function deleteWebinar(id: number): Promise<void> {
  const { error } = await supabase.from("webinars").delete().eq("id", id)

  if (error) {
    console.error("Error deleting webinar:", error)
    throw error
  }
}
