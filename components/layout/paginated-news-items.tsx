"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "../ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsItem } from "./news-item";
import { News } from "@/types/news";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface PaginatedNewsItemsProps {
  news: News[];
  paginationRange: (number | string)[];
  currentPage: number;
  totalPages: number;
  title: string;
}

export const PaginatedNewsItems = ({
  news,
  paginationRange,
  currentPage,
  totalPages,
  title,
}: PaginatedNewsItemsProps) => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {news.map((item, index) => (
          <NewsItem key={index} news={item} />
        ))}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              className="text-base"
              disabled={currentPage <= 1}
              asChild
            >
              <a href={`/featured-news?page=${currentPage - 1}`}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Sebelumnya
              </a>
            </Button>
          </PaginationItem>
          {paginationRange.map((pageNum, index) => (
            <PaginationItem key={index}>
              {pageNum === "..." ? (
                <PaginationEllipsis />
              ) : (
                <Button
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  className="text-base"
                  asChild
                >
                  <Link
                    href={
                      pathname.includes("featured-news")
                        ? `/featured-news?page=${currentPage + 1}`
                        : `/international-news?page=${currentPage + 1}`
                    }
                  >
                    {pageNum}
                  </Link>
                </Button>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              className="text-base"
              disabled={currentPage >= totalPages}
              asChild
            >
              <Link
                href={
                  pathname.includes("featured-news")
                    ? `/featured-news?page=${currentPage + 1}`
                    : `/international-news?page=${currentPage + 1}`
                }
              >
                Selanjutnya
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
