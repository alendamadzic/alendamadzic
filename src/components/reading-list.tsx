import Link from 'next/link';
import { HomepageHeading } from '@/components/typography/headings';
import { articles } from '../lib/lists/articles';

export async function ReadingList() {
  return (
    <div>
      <HomepageHeading>Reading List</HomepageHeading>
      <div className="mt-2 flex flex-col gap-2 font-serif">
        {articles.map((article) => (
          <Link href={article.link} target="_blank" key={article.title}>
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
