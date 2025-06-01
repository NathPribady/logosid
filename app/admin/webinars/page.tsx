"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { getWebinars, createWebinar, updateWebinar, deleteWebinar, type Webinar } from "../../../lib/webinars"

export default function AdminWebinars() {
  const [webinars, setWebinars] = useState<Webinar[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
  })
  const [editingId, setEditingId] = useState<number | null>(null)

  useEffect(() => {
    fetchWebinars()
  }, [])

  async function fetchWebinars() {
    const fetchedWebinars = await getWebinars()
    setWebinars(fetchedWebinars)
    setIsLoading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (editingId) {
      await updateWebinar(editingId, formData)
    } else {
      await createWebinar(formData)
    }
    setFormData({
      title: "",
      description: "",
      category: "",
      image: "",
      date: new Date().toISOString().split("T")[0],
    })
    setEditingId(null)
    fetchWebinars()
  }

  async function handleDelete(id: number) {
    if (window.confirm("Are you sure you want to delete this webinar?")) {
      await deleteWebinar(id)
      fetchWebinars()
    }
  }

  function handleEdit(webinar: Webinar) {
    setFormData({
      title: webinar.title,
      description: webinar.description,
      category: webinar.category,
      image: webinar.image,
      date: new Date(webinar.date).toISOString().split("T")[0],
    })
    setEditingId(webinar.id)
  }

  if (isLoading) {
    return <div className="container mx-auto py-12 px-4 text-foreground">Loading...</div>
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-foreground mb-8">Manage Webinars</h1>

      <form onSubmit={handleSubmit} className="mb-8 bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
          {editingId ? "Edit Webinar" : "Add New Webinar"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="border border-input bg-background text-foreground p-2 rounded-md focus:ring-1 focus:ring-ring"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="border border-input bg-background text-foreground p-2 rounded-md focus:ring-1 focus:ring-ring"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="border border-input bg-background text-foreground p-2 rounded-md focus:ring-1 focus:ring-ring"
            required
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="border border-input bg-background text-foreground p-2 rounded-md focus:ring-1 focus:ring-ring"
            required
          />
        </div>
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border border-input bg-background text-foreground p-2 rounded-md w-full mt-4 focus:ring-1 focus:ring-ring"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90"
        >
          {editingId ? "Update Webinar" : "Add Webinar"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webinars.map((webinar) => (
          <div key={webinar.id} className="bg-card rounded-lg shadow-md overflow-hidden">
            <img
              src={webinar.image || "/placeholder.svg?height=192&width=400&query=admin+webinar+image"}
              alt={webinar.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">{webinar.category}</span>
                <span className="text-sm text-muted-foreground">{new Date(webinar.date).toLocaleDateString()}</span>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{webinar.title}</h3>
              <p className="text-muted-foreground mb-4">{webinar.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(webinar)}
                  className="bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/90"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(webinar.id)}
                  className="bg-destructive text-destructive-foreground py-2 px-4 rounded-md hover:bg-destructive/90"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
