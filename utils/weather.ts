"use server"

const BASE_URL = "https://api.openweathermap.org/data/2.5"

export async function getWeatherData(city = "London") {
  try {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`)
    if (!response.ok) throw new Error("Weather data fetch failed")
    return response.json()
  } catch (error) {
    console.error("Error fetching weather:", error)
    throw error
  }
}

export async function getForecast(city = "London") {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&cnt=40&appid=${process.env.OPENWEATHER_API_KEY}`,
    )
    if (!response.ok) throw new Error("Forecast data fetch failed")
    return response.json()
  } catch (error) {
    console.error("Error fetching forecast:", error)
    throw error
  }
}

export async function getAirQuality(lat: number, lon: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`,
    )
    if (!response.ok) throw new Error("Air quality data fetch failed")
    return response.json()
  } catch (error) {
    console.error("Error fetching air quality:", error)
    throw error
  }
}

