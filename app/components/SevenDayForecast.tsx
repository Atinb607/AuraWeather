import { Card } from "@/components/ui/card"

interface ForecastData {
  list: Array<{
    dt: number
    temp: {
      day: number
    }
    weather: Array<{
      icon: string
      description: string
    }>
  }>
}

export default function SevenDayForecast({ data }: { data: ForecastData }) {
  const formatDay = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' })
  }

  return (
    <Card className="backdrop-blur-md bg-gray-800/30 border-gray-700/50 p-6 transition-all hover:bg-gray-700/40">
      <h2 className="text-lg font-medium mb-6 text-gray-300">7-Day Forecast</h2>
      <div className="grid grid-cols-7 gap-4">
        {data.list.slice(0, 7).map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-sm mb-2 font-medium">{formatDay(day.dt)}</div>
            <div className="w-10 h-10 mx-auto mb-2">
              <img 
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="w-full h-full"
              />
            </div>
            <div className="text-sm text-gray-300">{Math.round(day.temp.day)}°</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

