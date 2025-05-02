import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { stack } from '@/components/stack/stack';
import { StackItem } from '@/components/stack/stack-item';

export function StackSheet() {
  return (
    <Sheet>
      <SheetTrigger className="underline">Stack</SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Development Stack</SheetTitle>
          <SheetDescription>All of the apps, tools and services I use to build my projects.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-200px)]">
          {stack.map((section) => (
            <div key={section.title} className="mt-8">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <div className="flex flex-col gap-4">
                {section.items.map((item) => (
                  <StackItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
        <SheetFooter className="mt-4">
          <p className="text-sm">
            This is not a comprehensive list of all the tools and services I use.{' '}
            <Link href="mailto:alendamadzic@gmail.com" className="underline">
              Let me know
            </Link>{' '}
            if there is anything I should try.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
