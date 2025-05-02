import Link from 'next/link';
import Image from 'next/image';

export function StackItem({
  title,
  description,
  link,
  icon = null,
}: {
  title: string;
  description: string;
  link: string;
  icon?: string | null;
}) {
  return (
    <div className="flex flex-row gap-4">
      {icon && (
        <div className="flex-shrink-0 w-8">
          <div className="relative aspect-square w-8 h-8">
            <Image src={icon} alt={title} fill className="object-contain rounded-lg" sizes="32px" priority />
          </div>
        </div>
      )}
      <div className="flex flex-col align-top">
        <Link href={link} className="font-semibold text-sm">
          {title}
        </Link>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
