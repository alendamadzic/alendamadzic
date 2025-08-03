import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { HomepageHeading } from '@/components/typography/headings';
import { companies } from '@/lib/lists';

export function CompaniesSlider() {
  return (
    <div className="flex flex-col gap-4">
      <HomepageHeading>Some companies I&apos;ve worked for and with...</HomepageHeading>
      <InfiniteSlider gap={24}>
        {companies.map((company) => (
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
  );
}
