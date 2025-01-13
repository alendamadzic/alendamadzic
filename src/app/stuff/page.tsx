import { ItemCard } from './item';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const items = [
  {
    name: 'Read this...',
    items: [
      {
        title:
          "Learnability Isn't Enough: How to Design Apps That Are Easy to Use in the Long Run, Not Just the First Run",
        description:
          'This book provides a unique framework to proactively find and fix permanent sources of UI effort. This helps you create apps that are both easy to learn and efficient in long-term use.',
        image: 'https://m.media-amazon.com/images/I/61rcN28uGIL._SL1360_.jpg',
        link: 'https://amzn.eu/d/2NkXZFS',
      },
      {
        title: 'Hooked: How to Build Habit-Forming Products',
        description:
          'Why do some products capture our attention while others flop? What makes us engage with certain things out of sheer habit? Is there an underlying pattern to how technologies hook us? Nir Eyal answers these questions (and many more) with the Hook Model',
        image: 'https://m.media-amazon.com/images/I/81L8JOVXJtL._SL1500_.jpg',
        link: 'https://amzn.eu/d/eR9KebV',
      },
      {
        title: "The Pep Revolution: Inside Guardiola's Manchester City",
        description:
          "This is the long-awaited, access-all-areas story of Pep Guardiola's time at Manchester City, telling every twist and turn of their journey to the top and providing the definitive lessons of Guardiola's leadership.",
        image: 'https://m.media-amazon.com/images/I/81PYFqXpHhL._SL1500_.jpg',
        link: 'https://amzn.eu/d/jgiM6dm',
      },
    ],
  },
  {
    name: 'Watch This...',
    items: [
      {
        title: 'The Social Dilemma',
        description:
          'Nominated for seven Emmys and winning two, including Best Writing, this documentary-drama explores the dangerous human impact of social networking.',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/27/Social_dilemma_xlg.jpg',
        link: 'https://www.netflix.com/title/81254224',
      },
      {
        title: 'Design & Thinking',
        description: '"Design & Thinking" is a documentary exploring the idea of "design thinking."',
        image:
          'https://m.media-amazon.com/images/M/MV5BNzE1NDIzYTItNDgxMi00NmI4LTk0MmQtMjAwNGEyMjVhMTk5XkEyXkFqcGc@._V1_.jpg',
        link: 'https://designthinkingmovie.com/',
      },
    ],
  },
];

export default function Stuff() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">{`Things I'm reading, watching, listening to and playing...`}</h1>
      {items.map((item) => (
        <div key={item.name}>
          <h2 className="text-lg text-muted-foreground font-semibold">{item.name}</h2>
          <InfiniteSlider durationOnHover={75} gap={24}>
            {item.items.map((item) => (
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
      ))}
    </div>
  );
}
