import { HomepageHeading, HomepageSubheading } from '@/components/typography/headings';
import { Item } from '@/types';
import { AppItem } from './app-item';

type AppBlockProps = {
  title: string;
  description: string | React.ReactNode;
  items: Item[];
};

export function AppBlock({ title, description, items }: AppBlockProps) {
  return (
    <div>
      <HomepageHeading>{title}</HomepageHeading>
      {typeof description === 'string' ? <HomepageSubheading>{description}</HomepageSubheading> : description}
      <div className="flex flex-col gap-4 mt-2">
        {items.map((item) => (
          <AppItem
            key={item.title}
            title={item.title}
            description={item.description}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
