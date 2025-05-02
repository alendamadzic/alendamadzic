import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomepageHeading } from '@/components/typography/headings';
const connects = [
  {
    name: 'Email',
    url: 'mailto:alendamadzic@me.com',
  },
  {
    name: 'Threads',
    url: 'https://threads.net/alendamadzic',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/alendamadzic',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alendamadzic/',
  },
  {
    name: 'Resume',
    url: '/alendamadzic.pdf',
  },
];

type ConnectProps = {
  className?: string;
};

export function Connect({ className }: ConnectProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <HomepageHeading>Connect</HomepageHeading>
      <ul className="flex flex-col gap-2">
        {connects.map((connect) => (
          <li key={connect.name}>
            <Button variant="link" className="p-0">
              <Link href={connect.url}>{connect.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
