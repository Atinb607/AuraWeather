import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CloudSun, Droplets, Wind } from "lucide-react"

export default function WeatherDisplay({ data }) {
  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 text-gray-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{data.location}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold text-blue-400">{data.temperature}°C</div>
          <div className="text-xl text-gray-300">{data.condition}</div>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <div className="flex items-center text-gray-400">
            <Droplets className="mr-1 h-4 w-4" />
            <span>Humidity: {data.humidity}%</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Wind className="mr-1 h-4 w-4" />
            <span>Wind: {data.windSpeed} km/h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

