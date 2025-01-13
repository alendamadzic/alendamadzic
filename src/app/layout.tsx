import './globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/nav';
import { Footer } from '@/components/footer';

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
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 max-w-xl mx-4 mt-8 lg:mx-auto">
            <Navbar />
            {children}
            <div className="mt-24" />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
