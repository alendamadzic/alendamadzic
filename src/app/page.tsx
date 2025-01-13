import { Bio, Intro } from '@/components/profile';
import { Connect } from '@/components/connect';

export default function Home() {
  return (
    <section>
      <Bio className="mb-4" />
      <Intro />
      <Connect />
    </section>
  );
}
