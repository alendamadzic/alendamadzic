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
import { Item, Section } from '@/types';
import { AppItem } from '@/components/app-item';

type AppSheetProps = {
  triggerText: string;
  title: string;
  description: string;
  footerText: string;
  // Either sectioned data (like stack) or flat items (like apps)
  sections?: Section[];
  items?: Item[];
};

export function AppSheet({ triggerText, title, description, footerText, sections, items }: AppSheetProps) {
  return (
    <Sheet>
      <SheetTrigger className="underline">{triggerText}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-200px)]">
          {sections ? (
            // Render sectioned data (for stack)
            sections.map((section) => (
              <div key={section.title} className="mt-8">
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <div className="flex flex-col gap-4">
                  {section.items.map((item) => (
                    <AppItem
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      link={item.link}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Render flat items (for apps)
            <div className="flex flex-col gap-4">
              {items?.map((item) => (
                <AppItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  icon={item.icon}
                />
              ))}
            </div>
          )}
        </ScrollArea>
        <SheetFooter className="mt-4">
          <p className="text-sm">
            {footerText}{' '}
            <Link href="mailto:alendamadzic@me.com" className="underline">
              Let me know
            </Link>{' '}
            if there&apos;s something I should try.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
