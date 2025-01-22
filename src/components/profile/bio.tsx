import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type BioProps = {
  className?: string;
};

export function Bio({ className }: BioProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Avatar className="w-20 h-20">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold tracking-tighter">
          {`I'm Alen -- product person, rookie developer, failed footballer`}
        </h1>
      </div>
    </div>
  );
}
