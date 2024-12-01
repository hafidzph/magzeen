import { InternationalNews, News } from "@/types/news";
import axios from "axios";
import { categories, slugify, unslugify } from "../utils/utils";

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

    const data = response.data.data.posts.map((post: News) => ({
      ...post,
      source,
      category,
    }));

    return data;
  } catch {
    return null;
  }
}

export async function getNewsByCategory(
  category: string,
  page: number,
  limit: number
) {
  const newsPromises = newsSources.map(({ source }) =>
    getNews(source, category).catch((error) => {
      console.error(`Error fetching news from ${category}:`, error);
      return null;
    })
  );

  const newsArray = await Promise.all(newsPromises);
  const sourceNews = newsArray.filter(
    (news): news is NonNullable<typeof news> => news !== null
  );

  const allNews = sourceNews.flat();

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

export async function getSourceNews(
  source: string,
  page: number,
  limit: number
) {
  const newsPromises = categories.map(({ title: category }) =>
    getNews(source, category.toLowerCase()).catch((error) => {
      console.error(`Error fetching news from ${source}:`, error);
      return null;
    })
  );

  const newsArray = await Promise.all(newsPromises);
  const sourceNews = newsArray.filter(
    (news): news is NonNullable<typeof news> => news !== null
  );

  const allNews = sourceNews.flat();

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

async function getInternationalNews() {
  try {
    const response = await axios.get(
      `${BASE_URL_NEWSAPI}/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const news = response.data.articles.filter(
      (article: InternationalNews) =>
        article.title !== "[Removed]" && article.urlToImage
    );
    return news;
  } catch (e) {
    throw new Error((e as Error).message);
  }
}

export async function getTopHeadlines(page: number, limit: number) {
  const news = await getInternationalNews();

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedNews = news.slice(startIndex, endIndex);
  const totalPages = Math.ceil(news.length / limit);

  return {
    news: paginatedNews,
    totalPages,
    currentPage: page,
  };
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

export async function getHomepageFeaturedNews() {
  const { totalPages } = await getFeaturedNews(1, 1);
  const totalItems = totalPages * 1;

  const { news: allFeaturedNews } = await getFeaturedNews(1, totalItems);

  const uniqueSourceNews = allFeaturedNews.reduce((acc: News[], current) => {
    if (!acc.some((item) => item.source === current.source)) {
      acc.push(current);
    }
    return acc;
  }, []);

  return uniqueSourceNews.sort(() => 0.5 - Math.random());
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

export async function getDetailNews(
  source: string,
  category: string,
  title: string
) {
  if (category === "world") {
    return getInternationalNewsDetail(title);
  } else {
    return getRegularNewsDetail(source, category, title);
  }
}

export async function getRegularNewsDetail(
  source: string,
  category: string,
  title: string
) {
  const news = await getNews(source, category);

  if (!news) {
    return null;
  }

  const unslugifiedTitle = unslugify(title);

  const detailNews = news.find(
    (news: News) => unslugify(slugify(news.title)) === unslugifiedTitle
  );

  return detailNews;
}

async function getInternationalNewsDetail(title: string) {
  const news = await getInternationalNews();

  if (!news) {
    return null;
  }

  const unslugifiedTitle = unslugify(title);

  const detailNews = news.find(
    (item: InternationalNews) =>
      unslugify(slugify(item.title)) === unslugifiedTitle
  );

  console.log(detailNews);

  return detailNews;
}

export async function getRelatedNews(category: string, slug: string) {
  if (category === "world") {
    return getRelatedNewsInternational(slug);
  } else {
    return getRelatedNewsRegular(category, slug);
  }
}

async function getRelatedNewsInternational(slug: string) {
  const news = await getInternationalNews();
  const unslugifiedTitle = unslugify(slug);

  const relatedNews = news.filter(
    (item: InternationalNews) =>
      unslugify(slugify(item.title)) !== unslugifiedTitle
  );

  return relatedNews.slice(0, 3);
}

export async function getRelatedNewsRegular(category: string, slug: string) {
  const newsPromises = newsSources.map(({ source }) =>
    getNews(source, category).catch((error) => {
      console.error(`Error fetching news from ${source}:`, error);
      return null;
    })
  );

  const newsArray = await Promise.all(newsPromises);
  const relatedNews = newsArray.filter(
    (news): news is NonNullable<typeof news> => news !== null
  );
  const unslugifiedTitle = unslugify(slug);

  return relatedNews
    .flat()
    .filter((news: News) => unslugify(slugify(news.title)) !== unslugifiedTitle)
    .slice(0, 3);
}
