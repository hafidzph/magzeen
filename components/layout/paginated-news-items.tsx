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
                  <a href={`/featured-news?page=${pageNum}`}>{pageNum}</a>
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
              <a href={`/featured-news?page=${currentPage + 1}`}>
                Selanjutnya
                <ChevronRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
