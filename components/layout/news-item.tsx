import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface NewsItemProps {
  news: {
    thumbnail: string;
    title: string;
    source: string;
    category: string;
    description: string;
  };
}

export const NewsItem = ({ news }: NewsItemProps) => {
  const { thumbnail, title, source, category, description } = news;

  return (
    <Link href={`/berita`}>
      <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex gap-2 mb-3">
            <Badge variant="secondary" className="font-medium uppercase">
              {source}
            </Badge>
            <Badge variant="outline" className="font-medium uppercase">
              {category}
            </Badge>
          </div>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
