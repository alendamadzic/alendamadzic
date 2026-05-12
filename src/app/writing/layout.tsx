import Link from 'next/link';

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-10">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← Home
      </Link>
      <article className="prose prose-neutral dark:prose-invert max-w-none">{children}</article>
    </div>
  );
}
