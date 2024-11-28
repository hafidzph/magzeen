"use server";

import { BreakingNews } from "@/components/layout/breaking-news";
import { NewsSourceCarousel } from "@/components/layout/carousel-news-source";
import { ArticleItems } from "@/components/layout/article-items";
import { Weather } from "@/components/layout/weather";
import {
  getBreakingNews,
  getFeaturedNews,
  getTopHeadlines,
} from "@/lib/api/news";
import { getWeather } from "@/lib/api/weather";

export default async function Home() {
  const data = await getWeather(-6.2, 106.816666);
  const featuredNews = await getFeaturedNews();
  const breakingNews = await getBreakingNews();
  const internationalNews = await getTopHeadlines();

  const { province } = data.data[0].location;
  const { t, hu, ws, image, weather_desc } = data.data[0].weather[0][0];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid justify-center items-center gap-10 max-w-7xl mx-auto w-full">
        <BreakingNews breakingNews={breakingNews} />
        <NewsSourceCarousel />
        <Weather
          province={province}
          t={t}
          hu={hu}
          ws={ws}
          image={image}
          weather_desc={weather_desc}
        />
        <ArticleItems
          title="Berita Unggulan"
          news={featuredNews}
          variant="featured"
        />
        <ArticleItems
          title="Berita Internasional"
          news={internationalNews}
          variant="international"
        />
      </div>
    </div>
  );
}
