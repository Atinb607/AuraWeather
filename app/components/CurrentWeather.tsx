import { MapPin, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

interface WeatherData {
  name: string
  main: {
    temp: number
    feels_like: number
  }
  weather: Array<{
    main: string
    description: string
    icon: string
  }>
  sys: {
    country: string
  }
}

export default function CurrentWeather({ data }: { data: WeatherData }) {
  const date = new Date()
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  })

  return (
    <Card className="backdrop-blur-md bg-gray-800/30 border-gray-700/50 p-6 transition-all hover:bg-gray-700/40 rounded-xl">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4 text-gray-300">Now</h2>
          <div className="flex items-center gap-4">
            <div className="text-6xl font-bold bg-gradient-to-br from-gray-100 to-gray-300 text-transparent bg-clip-text">
              {Math.round(data.main.temp)}°c
            </div>
            <div className="w-16 h-16 transform hover:scale-110 transition-transform">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mt-2 text-gray-400 capitalize">{data.weather[0].description}</div>
        </div>

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>
              {data.name}, {data.sys.country}
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}

