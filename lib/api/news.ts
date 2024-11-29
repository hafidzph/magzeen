import { Article } from "@/types/news";
import axios from "axios";

const BASE_URL = process.env.BASE_URL_NEWS_API;
const BASE_URL_NEWSAPI = process.env.BASE_URL_NEWSAPI;
const API_KEY = process.env.API_KEY_NEWSAPI;

const newsSources: { source: string; category: string }[] = [
  { source: "antara", category: "politik" },
  { source: "cnbc", category: "investment" },
  { source: "cnn", category: "nasional" },
  { source: "jpnn", category: "terbaru" },
  { source: "kumparan", category: "terbaru" },
  { source: "merdeka", category: "dunia" },
  { source: "okezone", category: "sports" },
  { source: "republika", category: "internasional" },
  { source: "sindonews", category: "tekno" },
  { source: "suara", category: "lifestyle" },
  { source: "tempo", category: "nasional" },
  { source: "tribun", category: "superskor" },
];

export async function getNews(source: string, category: string) {
  try {
    const response = await axios.get(`${BASE_URL}/${source}/${category}`);

    if (!response.data.success) {
      return null;
    }

    const data = response.data.data.posts.map((post) => ({
      ...post,
      source,
      category,
    }));

    return data;
  } catch {
    return null;
  }
}

export async function getTopHeadlines() {
  try {
    const res = await axios.get(
      `${BASE_URL_NEWSAPI}/top-headlines?country=us&apiKey=${API_KEY}`
    );

    return res.data.articles.filter(
      (article: Article) => article.title !== "[Removed]"
    );
  } catch (e) {
    throw new Error((e as Error).message);
  }
}

export async function getFeaturedNews(page: number, limit: number) {
  const newsPromises = newsSources.map(({ source, category }) =>
    getNews(source, category).catch((error) => {
      console.error(`Error fetching news from ${source}:`, error);
      return null;
    })
  );

  const newsArray = await Promise.all(newsPromises);
  const validNews = newsArray.filter(
    (news): news is NonNullable<typeof news> => news !== null
  );

  const allNews = validNews.flat();

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedNews = allNews.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allNews.length / limit);

  return {
    news: paginatedNews,
    totalPages,
    currentPage: page,
  };
}

export async function getBreakingNews() {
  const breakingNewsPromises = newsSources
    .filter(({ source }) => source !== "tempo")
    .map(({ source }) =>
      getNews(source, "terbaru").catch((error) => {
        console.error(`Error fetching breaking news from ${source}:`, error);
        return null;
      })
    );

  const newsArray = await Promise.all(breakingNewsPromises);
  const breakingNews = newsArray.filter(
    (news): news is NonNullable<typeof news> => news !== null
  );

  return breakingNews.flat();
}
