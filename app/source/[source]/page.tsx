import { PaginatedNewsItems } from "@/components/layout/paginated-news-items";
import { getSourceNews } from "@/lib/api/news";
import { generatePaginationRange } from "@/lib/utils/utils";
import { headers } from "next/headers";

export default async function SourceNews({
  searchParams: searchParamsPromise,
}: {
  searchParams: { page: string };
}) {
  const searchParams = await searchParamsPromise;
  const head = await headers();
  const pathname = head.get("x-pathname")?.split("/")[2] || "";

  const currentPage = Number(searchParams.page) || 1;
  const limit = 9;
  const { news, totalPages } = await getSourceNews(
    pathname,
    currentPage,
    limit
  );
  const paginationRange = generatePaginationRange(currentPage, totalPages);

  return (
    <PaginatedNewsItems
      news={news}
      paginationRange={paginationRange}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
