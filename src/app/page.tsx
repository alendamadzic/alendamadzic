import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from '@/components/ui/item';
import { articles, connects, projects, recommendations, writing } from '@/lib/lists';

export default function Home() {
  return (
    <>
      {/* Profile */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Alen here 👋 -- product person, <span className="line-through">amateur developer</span> vibe coder, failed
          footballer
        </h2>
        <p className="text-muted-foreground">
          I design,{' '}
          <Link href={connects.find((connect) => connect.name === 'GitHub')?.url ?? ''} className="underline">
            develop
          </Link>{' '}
          and deliver awesome products. Building with user first design and leveraging AI to deliver scalable,
          innovative solutions that address real-world challenges.
        </p>
        <p className="text-muted-foreground">
          Check out my{' '}
          <Link href="https://www.ebay.co.uk/usr/adamadzic" className="underline">
            garage sale
          </Link>
          .
        </p>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-muted-foreground">Building</h3>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.title}>
              <Link href={project.link} target="_blank" className="flex flex-row items-center gap-1">
                <h4 className="font-semibold">{project.title}</h4>
                <ArrowUpRightIcon className="size-4" />
              </Link>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      {writing.length > 0 && (
        <section className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-muted-foreground">Writing</h3>
          <div className="flex flex-col gap-1 font-serif text-muted-foreground">
            {writing.map((post) => (
              <Link key={post.link} href={post.link} target="_blank">
                {post.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Reading List */}
      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-muted-foreground">Reading</h3>
        <div className="flex flex-col gap-1 font-serif text-muted-foreground">
          {articles.map((article) => (
            <Link href={article.link} target="_blank" key={article.title}>
              {article.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-muted-foreground">Recommending</h3>
        <ItemGroup>
          {recommendations.map((app) => (
            <Item key={app.title}>
              <ItemMedia variant="image">
                <Image src={app.image} alt={app.title} fill className="object-cover" priority />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{app.title}</ItemTitle>
                <ItemDescription>{app.description}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </section>

      {/* Connect */}
      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-muted-foreground">Connect</h3>
        <ul>
          {connects.map((connect) => (
            <li key={connect.name}>
              <Button variant="link" className="p-0" asChild>
                <Link href={connect.url}>{connect.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
