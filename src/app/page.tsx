import { Bio, Intro } from '@/components/profile';
import { Connect } from '@/components/connect';

export default function Home() {
  return (
    <section>
      <Bio className="mb-4" />
      <Intro />
      <Connect className="my-12" />
      <div className="my-12"></div>
    </section>
  );
}
