import React, { FC } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/lib/utils/utils";
import { NewsUniversal } from "@/types/news";
import { RegularArticleCard } from "./regular-article-card";

interface ArticleItemsProps {
  news: NewsUniversal[];
  title: string;
  variant: "featured" | "international";
}

export const ArticleItems: FC<ArticleItemsProps> = ({
  news,
  title,
  variant,
}: ArticleItemsProps) => {
  const featuredSlices = news.sort(() => 0.5 - Math.random()).slice(0, 5);
  const [featured, ...regular] = featuredSlices;

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
        <Link
          href={
            variant === "featured" ? "/featured-news" : "international-news"
          }
          className="text-slate-600 hover:text-slate-800 transition-colors flex items-center gap-2"
        >
          Lihat Semua <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {variant === "international" && (
          <Card className="md:col-span-2 group cursor-pointer overflow-hidden bg-primary-foreground">
            <Link
              href={`/${
                typeof featured.source === "object" &&
                slugify(featured.source.name)
              }/world/${slugify(featured.title)}`}
            >
              <div className="relative">
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={featured.thumbnail || featured.urlToImage || "none"}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight">
                      {featured.title}
                    </h3>
                    <p className="text-sm text-white/80 uppercase tracking-wider">
                      {featured.category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        )}

        {regular.map((news, index) => (
          <RegularArticleCard key={index} news={news} />
        ))}
        {variant === "featured" && (
          <Card className="md:col-span-2 group cursor-pointer overflow-hidden bg-primary-foreground">
            <Link
              href={`${featured.source}/${featured.category}/${slugify(
                featured.title
              )}`}
            >
              <div className="relative">
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={featured.thumbnail || featured.urlToImage || "none"}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight">
                      {featured.title}
                    </h3>
                    <p className="text-sm text-white/80 uppercase tracking-wider">
                      {featured.category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        )}
      </div>
    </section>
  );
};
