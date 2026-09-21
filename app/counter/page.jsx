"use client"
import React, { useState } from "react"

const page = () => {
  const [count, setcount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Count: {count}
        </h1>

        <div className="flex flex-col gap-3">

          <button
            onClick={() => setcount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Increase
          </button>

          <button
            onClick={() => setcount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Decrease
          </button>

          <button
            onClick={() => setcount(0)}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  )
}

export default page