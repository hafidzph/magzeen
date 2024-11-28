type Location = {
  province: string;
};

type Weather = {
  t: number;
  hu: number;
  ws: number;
  image: string;
  weather_desc: string;
};

export type WeatherData = {
  status: number;
  message: string;
  data: Array<{
    location: Location;
    weather: Array<Array<Weather>>;
  }>;
};
