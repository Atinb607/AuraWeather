import { Card } from "@/components/ui/card"
import { Sun, Wind, Droplets, Eye, Moon } from 'lucide-react'

interface WeatherData {
  current: {
    main: {
      humidity: number
      pressure: number
      feels_like: number
    }
    visibility: number
    sys: {
      sunrise: number
      sunset: number
    }
  }
  airQuality: {
    list: Array<{
      components: {
        pm2_5: number
        so2: number
        no2: number
        o3: number
      }
    }>
  }
}

export default function TodaysHighlights({ data }: { data: WeatherData }) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const airQuality = data.airQuality.list[0].components

  return (
    <Card className="backdrop-blur-md bg-gray-800/30 border-gray-700/50 p-6 transition-all hover:bg-gray-700/40 h-full flex flex-col">
      <h2 className="text-lg font-medium mb-6 text-gray-300">Today's Highlights</h2>
      
      <div className="flex-grow grid gap-6 content-between">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-700/30 backdrop-blur-sm">
            <h3 className="text-sm text-gray-300 mb-2">Air Quality Index</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold">{Math.round(airQuality.pm2_5)}</div>
                <div className="text-xs text-gray-400">PM2.5</div>
              </div>
              <div>
                <div className="text-lg font-semibold">{Math.round(airQuality.so2)}</div>
                <div className="text-xs text-gray-400">SO2</div>
              </div>
              <div>
                <div className="text-lg font-semibold">{Math.round(airQuality.no2)}</div>
                <div className="text-xs text-gray-400">NO2</div>
              </div>
              <div>
                <div className="text-lg font-semibold">{Math.round(airQuality.o3)}</div>
                <div className="text-xs text-gray-400">O3</div>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-700/30 backdrop-blur-sm">
            <h3 className="text-sm text-gray-300 mb-2">Sunrise & Sunset</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span>{formatTime(data.current.sys.sunrise)}</span>
              </div>
              <div className="flex justify-between items-center">
                <Moon className="w-5 h-5 text-gray-400" />
                <span>{formatTime(data.current.sys.sunset)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            {
              title: "Humidity",
              value: data.current.main.humidity,
              unit: "%",
              icon: <Droplets className="w-5 h-5 text-gray-400" />
            },
            {
              title: "Pressure",
              value: data.current.main.pressure,
              unit: "hPa",
              icon: null
            },
            {
              title: "Visibility",
              value: Math.round(data.current.visibility / 1000),
              unit: "km",
              icon: <Eye className="w-5 h-5 text-gray-400" />
            },
            {
              title: "Feels Like",
              value: Math.round(data.current.main.feels_like),
              unit: "°c",
              icon: null
            }
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-gray-700/30 backdrop-blur-sm transition-all hover:bg-white/10">
              <h3 className="text-sm text-gray-300 mb-2">{item.title}</h3>
              <div className="flex items-baseline gap-1">
                {item.icon}
                <span className="text-2xl font-semibold">{item.value}</span>
                <span className="text-gray-400">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

