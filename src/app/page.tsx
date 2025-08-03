import { Bio, Intro } from '@/components/profile';
import { CompaniesSlider } from '@/components/companies';
import { Connect } from '@/components/connect';
import { Recommendations } from '@/components/recommendations/recommendations';
import { ReadingList } from '@/components/reading-list';
import { AppBlock } from '@/components/app-item-block';
import { AppSheet } from '@/components/app-item-sheet';
import { projects, apps, stack } from '@/lib/lists';
import { HomepageSubheading } from '@/components/typography/headings';

export default function Home() {
  return (
    <section>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <Bio />
          <Intro />
        </div>
        <CompaniesSlider />
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
        <ReadingList />
        <AppBlock
          title="Interesting Apps I Use"
          description="Apps that make my daily workflow more productive and enjoyable."
          items={apps}
        />
        <Recommendations />
        <Connect />
      </div>
    </section>
  );
}
