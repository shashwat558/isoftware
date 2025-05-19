import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'iSoftwareStudio - Premium Software Development',
  description: 'Transforming ideas into market-leading products through exceptional software development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}