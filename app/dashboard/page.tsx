"use client"

import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"
import { getUserRole } from "../../lib/supabase"

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
    if (user) {
      const userRole = await getUserRole()
      setRole(userRole)
    }
  }

  if (!user) {
    return <div>Please log in to access the dashboard.</div>
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">Dashboard</h1>
      <p className="mb-4">
        Welcome, {user.email}! Your role is: {role}
      </p>
    </div>
  )
}
