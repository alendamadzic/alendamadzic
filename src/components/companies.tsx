import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { HomepageHeading } from '@/components/typography/headings';

const companies = [
  {
    name: 'Adarga',
    logo: '/companies/adarga.avif',
    needsInversion: false,
  },
  {
    name: 'Titania',
    logo: '/companies/titania.svg',
    needsInversion: true,
  },
  {
    name: 'Manchester City',
    logo: '/companies/manchester_city.svg',
    needsInversion: false,
  },
  {
    name: 'Splunk',
    logo: '/companies/splunk.svg',
    needsInversion: true,
  },
  {
    name: 'Improbable',
    logo: '/companies/improbable.svg',
    needsInversion: true,
  },
  {
    name: 'Sony',
    logo: '/companies/sony.webp',
    needsInversion: true,
  },
];

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
            className={`h-[80px] w-auto max-w-[120px] ${company.needsInversion ? 'dark:invert dark:brightness-0' : ''}`}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
