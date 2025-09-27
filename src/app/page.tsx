import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { articles, connects, projects, recommendations } from '@/lib/lists';

export default function Home() {
  return (
    <>
      {/* Profile */}
      <section className="flex flex-col gap-4">
        <Avatar className="size-24 rounded-md">
          <AvatarImage src="/avatar.jpg" />
        </Avatar>
        <h2 className="text-2xl font-semibold">Alen here 👋 -- product person, amateur developer, failed footballer</h2>
        <p className="text-muted-foreground">
          I design,{' '}
          <Button variant="link" className="p-0" asChild>
            <Link href={connects.find((connect) => connect.name === 'GitHub')?.url ?? ''}>develop</Link>
          </Button>{' '}
          and deliver awesome products. Building with user first design and leveraging AI to deliver scalable,
          innovative solutions that address real-world challenges.
        </p>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-6">
        <h3 className="text-sm font-semibold text-muted-foreground">Building</h3>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.title}>
              <Link href={project.link} target="_blank" className="flex flex-row items-center gap-1">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <ArrowUpRightIcon className="size-4" />
              </Link>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reading List */}
      <section className="flex flex-col gap-6">
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
      <section className="flex flex-col gap-6">
        <h3 className="text-sm font-semibold text-muted-foreground">Recommending</h3>
        <div className="flex flex-col gap-2">
          {recommendations.map((app) => (
            <Card key={app.title} className="rounded-sm">
              <CardHeader className="flex flex-row gap-4">
                <div className="flex-shrink-0 w-16">
                  <div className="relative size-16">
                    <Image src={app.image} alt={app.title} fill className="object-contain rounded-lg" priority />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle>{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="flex flex-col gap-6">
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
