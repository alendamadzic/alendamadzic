import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type BioProps = {
  className?: string;
};

export function Bio({ className }: BioProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Avatar className="w-24 h-24">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold tracking-tighter">
          {`Alen here 👋 -- product person, rookie developer, failed footballer`}
        </h2>
      </div>
    </div>
  );
}
