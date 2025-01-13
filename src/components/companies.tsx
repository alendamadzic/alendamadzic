import { InfiniteSlider } from '@/components/ui/infinite-slider';

const companies = [
  {
    name: 'Adarga',
    logo: '/adarga.avif',
  },
  {
    name: 'Titania',
    logo: '/titania.svg',
  },
  {
    name: 'Manchester City',
    logo: '/manchester_city.svg',
  },
  {
    name: 'Splunk',
    logo: '/splunk.svg',
  },
  {
    name: 'Improbable',
    logo: '/improbable.svg',
  },
  {
    name: 'Elastic',
    logo: '/elastic.svg',
  },
  {
    name: 'Sony',
    logo: '/sony.webp',
  },
  {
    name: 'ServiceNow',
    logo: '/servicenow.svg',
  },
];

export function CompaniesSlider() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-muted-foreground">Some companies I've worked for and with...</h2>
      <InfiniteSlider gap={24} reverse>
        {companies.map((company) => (
          <img key={company.name} src={company.logo} alt={company.name} className="h-[80px] w-auto max-w-[120px]" />
        ))}
      </InfiniteSlider>
    </div>
  );
}
