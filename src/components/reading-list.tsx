import Link from 'next/link';
import { InstapaperClient } from '@/services/instapaper';

export async function ReadingList() {
  const client = new InstapaperClient();
  await client.authenticate();
  const articles = await client.getArticles();

  return (
    <div>
      <h2 className="text-lg font-semibold">Articles</h2>
      <div className="mt-2 flex flex-col gap-2 font-serif">
        {articles.map((article) => (
          <Link href={article.url} target="_blank" key={article.bookmark_id}>
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
