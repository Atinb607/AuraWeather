"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export default function AnalogClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours() % 12

  const secondDegrees = (seconds / 60) * 360
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360
  const hourDegrees = ((hours + minutes / 60) / 12) * 360

  return (
    <Card className="backdrop-blur-md bg-gray-800/30 border-gray-700/50 p-6 transition-all hover:bg-gray-700/40 h-full flex flex-col rounded-xl">
      <h2 className="text-lg font-medium mb-6 text-gray-300">Current Time</h2>
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
          <div
            className="absolute top-1/2 left-1/2 w-1 h-16 bg-gray-400 rounded-full"
            style={{
              transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`,
              transformOrigin: "bottom",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-1 h-20 bg-gray-300 rounded-full"
            style={{
              transform: `translate(-50%, -100%) rotate(${minuteDegrees}deg)`,
              transformOrigin: "bottom",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-0.5 h-24 bg-gray-200 rounded-full"
            style={{
              transform: `translate(-50%, -100%) rotate(${secondDegrees}deg)`,
              transformOrigin: "bottom",
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-100 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </Card>
  )
}

