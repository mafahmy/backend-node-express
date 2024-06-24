export interface GoogleNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    id?: number;
    name: string;
    url: string;
  };
}
