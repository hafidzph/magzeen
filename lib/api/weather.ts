import { WeatherData } from "@/types/weather";
import axios from "axios";

export const getWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherData> => {
  try {
    const { data } = await axios.get<WeatherData>(
      `${process.env.BASE_URL_WEATHER_API}/api/weather/forecast?lat=${latitude}&long=${longitude}`
    );

    return data;
  } catch {
    throw new Error("Failed to fetch weather data");
  }
};
