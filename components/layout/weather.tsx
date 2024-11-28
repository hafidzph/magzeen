import React, { FC } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface WeatherProps {
  province: string;
  t: number;
  hu: number;
  ws: number;
  image: string;
  weather_desc: string;
}

export const Weather: FC<WeatherProps> = ({
  province,
  t,
  hu,
  ws,
  image,
  weather_desc,
}: WeatherProps) => {
  const windSpeed = Math.round(ws * 3.6);

  return (
    <Card className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image src={image} alt={weather_desc} width={48} height={48} />
          <div>
            <h3 className="text-2xl font-bold">{province}</h3>
            <p className="text-lg">{weather_desc}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">{t}°C</p>
          <p>Humidity: {hu}%</p>
          <p>Wind: {windSpeed} km/h</p>
        </div>
      </CardContent>
    </Card>
  );
};
