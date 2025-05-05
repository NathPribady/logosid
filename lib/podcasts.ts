import { supabase } from "./supabase"

export interface Podcast {
  id: number
  created_at: string
  title: string
  description: string
  category: string
  image: string
  audio_url: string
  duration: number
  publish_date: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getPodcasts(retries = 3): Promise<Podcast[]> {
  try {
    const { data, error } = await supabase.from("podcasts").select("*").order("publish_date", { ascending: false })

    if (error) {
      console.error("Error fetching podcasts:", error)
      throw error
    }

    if (!data) {
      throw new Error("No data returned from Supabase")
    }

    return data as Podcast[]
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`)
      await delay(1000) // Wait for 1 second before retrying
      return getPodcasts(retries - 1)
    } else {
      console.error("Max retries reached. Error fetching podcasts:", error)
      throw error
    }
  }
}
