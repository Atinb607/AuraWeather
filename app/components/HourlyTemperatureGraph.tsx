'use client'

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface HourlyData {
  list: Array<{
    dt: number
    main: {
      temp: number
    }
  }>
}

export default function HourlyTemperatureGraph({ data }: { data: HourlyData }) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
  }

  const chartData = data.list.slice(0, 24).map(item => ({
    time: formatTime(item.dt),
    temp: Math.round(item.main.temp)
  }))

  return (
    <Card className="backdrop-blur-md bg-gray-800/30 border-gray-700/50 p-6 transition-all hover:bg-gray-700/40">
      <h2 className="text-lg font-medium mb-6 text-gray-300">24-Hour Temperature</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="time" 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}°`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#374151', border: 'none' }}
              labelStyle={{ color: '#D1D5DB' }}
              formatter={(value) => [`${value}°C`, 'Temperature']}
            />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="#60A5FA" 
              strokeWidth={2} 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

