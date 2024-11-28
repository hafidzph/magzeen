"use client";

import React, { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const categories = [
  {
    name: "Antara",
    image: "/images/antara.png",
  },
  {
    name: "CNBC",
    image: "/images/cnbc.jpg",
  },
  {
    name: "CNN",
    image: "/images/cnn.png",
  },
  {
    name: "JPNN",
    image: "/images/jpnn.jpg",
  },
  {
    name: "Kumparan",
    image: "/images/kumparan.png",
  },
  {
    name: "Merdeka",
    image: "/images/merdeka.png",
  },
  {
    name: "Okezone",
    image: "/images/okezone.png",
  },
  {
    name: "Republika",
    image: "/images/republika.jpg",
  },
  {
    name: "SINDOnews",
    image: "/images/sindo.png",
  },
  {
    name: "Suara",
    image: "/images/suara.jpg",
  },
  {
    name: "Tempo",
    image: "/images/tempo.jpg",
  },
  {
    name: "Tribun",
    image: "/images/tribun.png",
  },
];

export const NewsSourceCarousel: FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full mx-auto rounded-lg"
    >
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/7"
          >
            <div className="h-24 rounded-xl overflow-hidden relative duration-300 transition-all hover:scale-95 cursor-pointer">
              <Image
                src={category.image}
                alt={`${category.name} logo`}
                width={300}
                height={200}
                className="absolute w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-stone-600 bg-opacity-60 backdrop-blur-sm"></div>
              <div className="flex h-full items-center justify-center relative z-10">
                <span className="text-lg font-semibold text-white">
                  {category.name}
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
