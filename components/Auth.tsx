"use client"

import { useState } from "react"

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Implement login logic here
    setLoading(false)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Implement sign up logic here
    setLoading(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted">
      <form className="bg-card text-card-foreground p-8 rounded-lg shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4 text-card-foreground">Login / Sign Up</h2>
        <input
          className="w-full p-2 mb-4 border border-input bg-background text-foreground rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border border-input bg-background text-foreground rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 mb-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <button
          className="w-full p-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90"
          onClick={handleSignUp}
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  )
}
