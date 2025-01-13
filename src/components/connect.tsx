import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
];

type ConnectProps = {
  className?: string;
};

export function Connect({ className }: ConnectProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h2 id="connect" className="text-lg font-semibold text-muted-foreground">
        Connect
      </h2>
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
