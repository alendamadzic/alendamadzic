import { Bio, Intro } from '@/components/profile';
import { CompaniesSlider } from '@/components/companies';
import { Accolades } from '@/components/accolades';
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
        <Accolades />
        <Connect />
      </div>
    </section>
  );
}
