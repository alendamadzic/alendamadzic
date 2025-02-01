import { StackItem } from '@/app/stack/stack-item';

const projects = [
  {
    title: 'viewpoint.',
    description: 'A way to understand articles by the viewpoints of those invovled.',
    link: 'https://viewpoint.alen.world',
    icon: '/stack/vercel.png',
  },
  {
    title: 'games',
    description: 'A series of sports knowledge games. ',
    link: 'https://games.alen.world',
    icon: '/stack/vercel.png',
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="text-muted-foreground mb-4">Some ideas I&apos;ve had and try to make.</p>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <StackItem
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            icon={project.icon}
          />
        ))}
      </div>
    </div>
  );
}
