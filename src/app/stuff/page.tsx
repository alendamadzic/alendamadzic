import { ItemCard } from './item';

const items = [
  {
    name: 'Read this...',
    items: [
      {
        title: 'Les others studio - Que la montagne est belle ⛰',
        description: 'How beautiful the mountain is 🗻',
        image: 'https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg',
        link: 'https://lesothers.studio',
      },
      {
        title: 'Les others studio - Que la montagne est belle ⛰',
        description: 'How beautiful the mountain is 🗻',
        image: 'https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg',
        link: 'https://lesothers.studio',
      },
      {
        title: 'Les others studio - Que la montagne est belle ⛰',
        description: 'How beautiful the mountain is 🗻',
        image: 'https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg',
        link: 'https://lesothers.studio',
      },
    ],
  },
  {
    name: 'Watch This...',
    items: [
      {
        title: 'Les others studio - Que la montagne est belle ⛰',
        description: 'How beautiful the mountain is 🗻',
        image: 'https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg',
        link: 'https://lesothers.studio',
      },
      {
        title: 'Les others studio - Que la montagne est belle ⛰',
        description: 'How beautiful the mountain is 🗻',
        image: 'https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg',
        link: 'https://lesothers.studio',
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
          <div className="flex flex-row gap-4">
            {item.items.map((item) => (
              <ItemCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
