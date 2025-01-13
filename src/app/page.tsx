import { Bio, Intro } from '@/components/profile';
import { CompaniesSlider } from '@/components/companies';
import { Connect } from '@/components/connect';

export default function Home() {
  return (
    <section>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <Bio />
          <Intro />
        </div>
        <CompaniesSlider />
        <Connect />
      </div>
    </section>
  );
}
