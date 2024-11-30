import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export function formatRelativeTime(dateString: string): string {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true, locale: id });
}

export function generatePaginationRange(
  currentPage: number,
  totalPages: number
) {
  const delta = 9;
  const range: (number | string)[] = [];

  range.push(1);

  const start = Math.max(2, currentPage - delta);
  const end = Math.min(totalPages - 1, currentPage + delta);

  if (start > 2) {
    range.push("...");
  }

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  if (end < totalPages - 1) {
    range.push("...");
  }

  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function unslugify(title: string): string {
  return title.replace(/-/g, " ");
}
