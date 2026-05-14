import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Software Engineer Portfolio',
  description:
    'Professional portfolio showcasing AI, full-stack development, and cloud infrastructure expertise',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'AI Engineer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Software Engineer' }],
  creator: 'Software Engineer',
  publisher: 'Software Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'Software Engineer Portfolio',
    description:
      'Professional portfolio showcasing AI, full-stack development, and cloud infrastructure expertise',
    siteName: 'Software Engineer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineer Portfolio',
    description:
      'Professional portfolio showcasing AI, full-stack development, and cloud infrastructure expertise',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-bg-primary text-text-primary">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
