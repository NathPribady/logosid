import { supabase } from "./supabase"

export interface Category {
  name: string
}

export async function getCategoriesForType(type: "webinars" | "podcasts" | "content") {
  const { data, error } = await supabase.from(type).select("category").not("category", "is", null)

  if (error) {
    console.error(`Error fetching ${type} categories:`, error)
    throw error
  }

  const uniqueCategories = new Set<string>(data.map((item) => item.category.trim()))
  return Array.from(uniqueCategories)
    .sort()
    .map((name) => ({ name }))
}

export async function getCategories() {
  const [contentCategories, webinarCategories, podcastCategories] = await Promise.all([
    getCategoriesForType("content"),
    getCategoriesForType("webinars"),
    getCategoriesForType("podcasts"),
  ])

  const allCategories = new Set<string>()
  ;[contentCategories, webinarCategories, podcastCategories].forEach((categoryList) => {
    categoryList.forEach((category) => allCategories.add(category.name))
  })

  return Array.from(allCategories)
    .sort()
    .map((name) => ({ name }))
}
