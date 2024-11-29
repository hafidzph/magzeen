export type Source = {
  id: string;
  name: string;
};

export type InternationalNews = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type News = {
  link: string;
  title: string;
  pubData: string;
  description: string;
  thumbnail: string;
  source: string;
  category: string;
};
