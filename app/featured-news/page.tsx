import { PaginatedNewsItems } from "@/components/layout/paginated-news-items";
import { getFeaturedNews } from "@/lib/api/news";
import { generatePaginationRange } from "@/lib/utils/utils";

export default async function FeaturedNews({
  searchParams: searchParamsPromise,
}: {
  searchParams: { page: string };
}) {
  const searchParams = await searchParamsPromise;
  const currentPage = Number(searchParams.page) || 1;
  const limit = 9;
  const { news, totalPages } = await getFeaturedNews(currentPage, limit);
  const paginationRange = generatePaginationRange(currentPage, totalPages);

  return (
    <PaginatedNewsItems
      news={news}
      paginationRange={paginationRange}
      currentPage={currentPage}
      totalPages={totalPages}
      title="Berita Unggulan"
    />
  );
}
