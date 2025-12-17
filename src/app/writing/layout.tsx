import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { writing } from '@/lib/lists';

async function getSlugFromPath(): Promise<string | null> {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';

  // Extract slug from pathname like /writing/slug-name
  const match = pathname.match(/^\/writing\/([^/]+)$/);
  return match ? match[1] : null;
}

export async function generateMetadata(): Promise<Metadata> {
  const slug = await getSlugFromPath();
  const post = slug ? writing.find((p) => p.slug === slug) : null;

  return post
    ? {
        title: post.title,
      }
    : {
        title: 'Post Not Found',
      };
}

export default async function PostLayout({ children }: { children: React.ReactNode }) {
  const slug = await getSlugFromPath();
  const post = slug ? writing.find((p) => p.slug === slug) : null;

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
