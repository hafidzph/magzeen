import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  LinkIcon,
  Clock,
  User,
} from "lucide-react";
import { getDetailNews, getRelatedNews } from "@/lib/api/news";
import { format } from "date-fns";
import { RegularArticleCard } from "@/components/layout/regular-article-card";
import { NewsUniversal } from "@/types/news";

interface NewsDetailProps {
  params: { source: string; category: string; slug: string };
}

export default async function NewsDetail({
  params: paramsAsync,
}: NewsDetailProps) {
  const { source, category, slug } = await paramsAsync;

  const news = await getDetailNews(source, category, slug);

  const {
    title,
    category: contentCategory,
    pubDate,
    publishedAt,
    description,
    thumbnail,
    urlToImage,
  } = news;

  const relatedNews = await getRelatedNews(category, slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          {contentCategory && (
            <Badge variant="outline" className="mb-4">
              {contentCategory.toUpperCase()}
            </Badge>
          )}
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex items-center text-muted-foreground mb-4">
            <User className="w-4 h-4 mr-2" />
            <span className="mr-4">HEHE</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>{format(pubDate ?? publishedAt, "dd LLLL yyyy")}</span>
          </div>
        </header>

        <div className="relative aspect-video mb-8">
          <Image
            src={thumbnail || urlToImage || "none"}
            alt={title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="prose max-w-none mb-8 text-lg">
          <p>{description}</p>
        </div>

        <footer className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-base font-medium">Bagikan:</span>
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <LinkIcon className="h-4 w-4 mr-2" />
              Salin Tautan
            </Button>
          </div>
        </footer>

        <section>
          <h2 className="text-2xl font-bold mb-4">Berita Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedNews.map(
              (news: NewsUniversal, index: React.Key | null | undefined) => (
                <RegularArticleCard news={news} key={index} />
              )
            )}
          </div>
        </section>
      </article>
    </div>
  );
}
