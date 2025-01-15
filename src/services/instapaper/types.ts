export interface InstapaperArticle {
  bookmark_id: number;
  title: string;
  url: string;
  progress: number;
  time: number;
  tags: Array<{ name: string }>;
}

export interface InstapaperConfig {
  apiUrl: string;
  username: string;
  password: string;
  consumerKey: string;
  consumerSecret: string;
  defaultTag?: string;
}
