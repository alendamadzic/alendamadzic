import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alen Damadzic',
  description: 'Product Person, rookie developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0 max-w-xl mx-4 mt-8 lg:mx-auto">
            <div className="mt-24" />
            {children}
            <div className="mt-24" />
            <footer className="flex flex-row justify-between items-center mb-16">
              <p className="text-xs text-muted-foreground">© All rights reserved</p>
              <ThemeToggle />
            </footer>
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
