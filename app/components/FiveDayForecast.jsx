import { Card } from "@/components/ui/card"

export default function FiveDayForecast({ data }) {
  const dailyData = data.list.filter((item, index) => index % 8 === 0).slice(0, 5)

  const formatDay = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", { weekday: "short" })
  }

  return (
    <Card className="backdrop-blur-md bg-gray-800/30 border-gray-700/50 p-6 transition-all hover:bg-gray-700/40 rounded-xl">
      <h2 className="text-lg font-medium mb-6 text-gray-300">5-Day Forecast</h2>
      <div className="grid grid-cols-5 gap-4">
        {dailyData.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-sm mb-2 font-medium text-gray-400">{formatDay(day.dt)}</div>
            <div className="w-10 h-10 mx-auto mb-2">
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="w-full h-full"
              />
            </div>
            <div className="text-sm text-gray-300">{Math.round(day.main.temp)}°</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

