import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center mb-16">
      <p className="text-xs text-muted-foreground">© All rights reserved</p>
      <ThemeToggle />
    </footer>
  );
}
