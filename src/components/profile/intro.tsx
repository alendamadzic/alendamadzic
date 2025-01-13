import { cn } from '@/lib/utils';

type IntroProps = {
  className?: string;
};

export function Intro({ className }: IntroProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <p>{`Over a decade experience discovering, designing, developing and delivering awesome products.`}</p>
      <p>{`User first design, agile methodologies and leveraging advanced AI technologies (ML, NLP , LLMs) to deliver scalable, innovative solutions that address real-world challenges.`}</p>
    </div>
  );
}
