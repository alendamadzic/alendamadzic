import { recommendations } from '@/lib/lists';
import { ItemCard } from './item';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { HomepageHeading } from '@/components/typography/headings';

export function Recommendations() {
  return (
    <div>
      <HomepageHeading>Recommendations</HomepageHeading>
      <InfiniteSlider durationOnHover={75} gap={24} className="mt-2">
        {recommendations.map((item) => (
          <ItemCard
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
