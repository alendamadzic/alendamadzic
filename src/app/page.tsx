import Link from 'next/link';
import { Recommendations } from '@/components/recommendations/recommendations';
import { AppBlock } from '@/components/app-item-block';
import { AppSheet } from '@/components/app-item-sheet';
import { projects, apps, stack } from '@/lib/lists';
import { HomepageSubheading } from '@/components/typography/headings';
import { HomepageHeading } from '@/components/typography/headings';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { articles, companies, connects } from '@/lib/lists';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <>
      {/* Profile */}
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <Avatar className="w-24 h-24 rounded-lg">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold tracking-tighter">
                {`Alen here 👋 -- product person, rookie developer, failed footballer`}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>{`Over a decade experience discovering, designing, developing and delivering awesome products.`}</p>
            <p>{`Building with user first design, leveraging advanced AI technologies (ML, NLP , LLMs) to deliver scalable, innovative solutions that address real-world challenges.`}</p>
          </div>
        </div>

        {/* Companies */}
        <div className="flex flex-col gap-4">
          <HomepageHeading>Some companies I&apos;ve worked for and with...</HomepageHeading>
          <InfiniteSlider gap={24}>
            {companies.map((company) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={company.name}
                src={company.logo}
                alt={company.name}
                className={`h-[60px] w-auto max-w-[120px] object-contain ${
                  company.needsInversion ? 'dark:invert dark:brightness-0' : ''
                }`}
              />
            ))}
          </InfiniteSlider>
        </div>

        {/* Projects */}
        <AppBlock
          title="Projects"
          description={
            <HomepageSubheading>
              Check out the{' '}
              <AppSheet
                triggerText="Stack"
                title="Development Stack"
                description="All of the apps, tools and services I use to build my projects."
                footerText="This is not a comprehensive list of all the tools and services I use."
                sections={stack}
              />{' '}
              I use to build these projects.
            </HomepageSubheading>
          }
          items={projects}
        />

        {/* Reading List */}
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

        {/* Interesting Apps I Use */}
        <AppBlock
          title="Interesting Apps I Use"
          description="Apps that make my daily workflow more productive and enjoyable."
          items={apps}
        />

        {/* Recommendations */}
        <Recommendations />

        {/* Connect */}
        <div className="flex flex-col gap-4">
          <HomepageHeading>Connect</HomepageHeading>
          <ul className="flex flex-col gap-2">
            {connects.map((connect) => (
              <li key={connect.name}>
                <Button variant="link" className="p-0">
                  <Link href={connect.url}>{connect.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
