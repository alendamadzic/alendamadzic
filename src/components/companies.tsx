import { InfiniteSlider } from '@/components/ui/infinite-slider';

const companies = [
  {
    name: 'Adarga',
    logo: '/adarga.avif',
    needsInversion: false,
  },
  {
    name: 'Titania',
    logo: '/titania.svg',
    needsInversion: true,
  },
  {
    name: 'Manchester City',
    logo: '/manchester_city.svg',
    needsInversion: false,
  },
  {
    name: 'Splunk',
    logo: '/splunk.svg',
    needsInversion: true,
  },
  {
    name: 'Improbable',
    logo: '/improbable.svg',
    needsInversion: true,
  },
  {
    name: 'Sony',
    logo: '/sony.webp',
    needsInversion: true,
  },
  {
    name: 'ServiceNow',
    logo: '/servicenow.svg',
    needsInversion: true,
  },
];

export function CompaniesSlider() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-muted-foreground">{"Some companies I've worked for and with..."}</h2>
      <InfiniteSlider gap={24} reverse>
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
