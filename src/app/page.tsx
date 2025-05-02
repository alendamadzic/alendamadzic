import { Bio, Intro } from '@/components/profile';
import { CompaniesSlider } from '@/components/companies';
import { Connect } from '@/components/connect';
import { Projects } from '@/components/projects/projects-block';
import { Recommendations } from '@/components/recommendations/recommendations';
import { ReadingList } from '@/components/reading-list/reading-list';

export default function Home() {
  return (
    <section>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <Bio />
          <Intro />
        </div>
        <CompaniesSlider />
        <Projects />
        <ReadingList />
        <Recommendations />
        <Connect />
      </div>
    </section>
  );
}
