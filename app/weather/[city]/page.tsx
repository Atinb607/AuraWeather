import { searchLocation } from '@/app/actions'
import CurrentWeather from '@/app/components/CurrentWeather'
import TodaysHighlights from '@/app/components/TodaysHighlights'
import HourlyForecast from '@/app/components/HourlyForecast'
import FiveDayForecast from '@/app/components/FiveDayForecast'
import HourlyTemperatureGraph from '@/app/components/HourlyTemperatureGraph'
import AnalogClock from '@/app/components/AnalogClock'

export default async function WeatherPage({ params }: { params: { city: string } }) {
  const data = await searchLocation(decodeURIComponent(params.city))

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
        <div className="space-y-6">
          <CurrentWeather data={data.current} />
          <div className="grid grid-rows-[auto,1fr] gap-6">
            <FiveDayForecast data={data.forecast} />
            <AnalogClock />
          </div>
        </div>
        <div className="grid grid-rows-[auto,1fr] gap-6">
          <HourlyTemperatureGraph data={data.forecast} />
          <TodaysHighlights data={data} />
        </div>
      </div>
      <HourlyForecast data={data.forecast} />
    </div>
  )
}

