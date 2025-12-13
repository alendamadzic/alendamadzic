import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { writing } from '@/lib/lists';

const slug = 'stop-filling-the-jar';
const post = writing.find((p) => p.slug === slug);

export const metadata: Metadata = post
  ? {
      title: post.title,
    }
  : {
      title: 'Post Not Found',
    };

export default function PostLayout({ children }: { children: React.ReactNode }) {
  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <time className="text-xs text-muted-foreground">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </header>
      <div className="prose prose-neutral dark:prose-invert">{children}</div>
    </article>
  );
}
