"use server"

import { getWeatherData, getForecast, getAirQuality } from "@/utils/weather"

export async function searchLocation(city: string) {
  try {
    const weatherData = await getWeatherData(city)
    const forecastData = await getForecast(city)
    const airQualityData = await getAirQuality(weatherData.coord.lat, weatherData.coord.lon)

    return {
      current: weatherData,
      forecast: forecastData,
      airQuality: airQualityData,
    }
  } catch (error) {
    console.error("Search failed:", error)
    throw error
  }
}

