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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Login / Sign Up</h2>
        <input
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 mb-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <button
          className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={handleSignUp}
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  )
}
