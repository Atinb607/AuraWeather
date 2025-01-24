import { Card } from "@/components/ui/card"

export default function HourlyForecast({ data }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    })
  }

  return (
    <Card className="backdrop-blur-md bg-gray-800/30 border-gray-700/50 p-6 transition-all hover:bg-gray-700/40 rounded-xl">
      <h2 className="text-lg font-medium mb-6 text-gray-300">Today at</h2>
      <div className="grid grid-cols-8 gap-4">
        {data.list.slice(0, 8).map((hour, index) => (
          <div
            key={index}
            className="text-center p-3 rounded-lg bg-gray-700/30 backdrop-blur-sm transition-all hover:bg-gray-600/40"
          >
            <div className="text-sm mb-2 font-medium text-gray-300">{Math.round(hour.main.temp)}°</div>
            <div className="w-10 h-10 mx-auto mb-2 transform hover:scale-110 transition-transform">
              <img
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                alt={hour.weather[0].description}
                className="w-full h-full"
              />
            </div>
            <div className="text-sm text-gray-400">{formatTime(hour.dt)}</div>
            <div className="text-xs text-gray-500 mt-1">{Math.round(hour.wind.speed * 3.6)} km/h</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

