import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { NewsUniversal } from "@/types/news";
import Link from "next/link";
import { slugify } from "@/lib/utils/utils";

export const RegularArticleCard: FC<{ news: NewsUniversal }> = ({ news }) => (
  <Card className="shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 relative cursor-pointer">
    <Link
      href={`/${
        typeof news.source === "string"
          ? news.source
          : slugify(news.source.name)
      }/${news.category ?? "world"}/${slugify(news.title)}`}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={news.thumbnail || news.urlToImage || "none"}
            alt={news.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 p-4">
        <CardTitle className="leading-5">{news.title}</CardTitle>
        <CardDescription className="uppercase">
          {typeof news.source === "string"
            ? `${news.source} - ${news.category}`
            : news.source.name}
        </CardDescription>
      </CardContent>
    </Link>
  </Card>
);
