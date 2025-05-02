import { projects } from '@/components/projects/projects';
import { StackItem } from '@/components/stack/stack-item';
import { HomepageHeading } from '@/components/typography/headings';
import { StackSheet } from '@/components/stack/stack-sheet';

export function Projects() {
  return (
    <div>
      <HomepageHeading>Projects</HomepageHeading>
      <p className="text-sm text-muted-foreground mb-4">
        Check out the <StackSheet /> I use to build these projects.
      </p>
      <div className="flex flex-col gap-4 mt-2">
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
