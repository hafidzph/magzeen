import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";
import { formatRelativeTime } from "@/lib/utils/utils";

interface BreakingNews {
  title: string;
  thumbnail: string;
  source: string;
  pubDate: string;
}

interface BreakingNewsProps {
  breakingNews: BreakingNews[];
}

export const BreakingNews: FC<BreakingNewsProps> = ({
  breakingNews,
}: BreakingNewsProps) => {
  const newsSlices = breakingNews.sort(() => 0.5 - Math.random()).slice(0, 1);
  return (
    <section className="w-full">
      <div className="grid gap-4">
        {newsSlices.map((news, index) => (
          <Link key={index} href="">
            <Card className="group overflow-hidden relative h-[550px] w-full">
              <div className="absolute inset-0">
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  fill
                  loading="lazy"
                  quality={100}
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="mb-4">
                  <span className="bg-red-600 text-white px-2 py-1 text-sm font-bold rounded">
                    TERBARU
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="capitalize">
                    {formatRelativeTime(news.pubDate)}
                  </span>
                  <span>•</span>
                  <span className="uppercase">{news.source}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
