import { NewsItem } from "@/components/layout/news-item";
import { getFeaturedNews } from "@/lib/api/news";
import React from "react";

export default async function FeaturedNews() {
  const featuredNews = await getFeaturedNews();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Berita Unggulan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredNews.map((item, index) => (
          <NewsItem news={item} key={index} />
        ))}
      </div>
    </div>
  );
}
