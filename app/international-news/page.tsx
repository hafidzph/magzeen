import { PaginatedNewsItems } from "@/components/layout/paginated-news-items";
import { getTopHeadlines } from "@/lib/api/news";
import { generatePaginationRange } from "@/lib/utils/utils";
import type { InternationalNews } from "@/types/news";
import React from "react";

export default async function InternationalNews({
  searchParams: searchParamsPromise,
}: {
  searchParams: { page: string };
}) {
  const searchParams = await searchParamsPromise;
  const currentPage = (await Number(searchParams.page)) || 1;
  const limit = 9;
  const { news, totalPages } = await getTopHeadlines(currentPage, limit);
  const paginationRange = generatePaginationRange(currentPage, totalPages);

  const internationalNewsData = news.map((item: InternationalNews) => ({
    title: item.title,
    source: item.source.name,
    thumbnail: item.urlToImage,
    category: "world",
    description: item.description,
  }));

  return (
    <PaginatedNewsItems
      news={internationalNewsData}
      paginationRange={paginationRange}
      currentPage={currentPage}
      totalPages={totalPages}
      title="Berita Internasional"
    />
  );
}
