import { NewsItem } from "@/components/layout/news-item";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { getFeaturedNews } from "@/lib/api/news";
import { generatePaginationRange } from "@/lib/utils/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default async function FeaturedNews({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const limit = 9;
  const { news, totalPages } = await getFeaturedNews(currentPage, limit);
  const paginationRange = generatePaginationRange(currentPage, totalPages);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Berita Unggulan</h1>
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
              disabled={currentPage <= 1}
              asChild
            >
              <a href={`/featured-news?page=${currentPage - 1}`}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
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
              disabled={currentPage >= totalPages}
              asChild
            >
              <a href={`/featured-news?page=${currentPage + 1}`}>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
