import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dipan-adhikari.dev'),
  title: {
    default: 'Dipan Adhikari — Student, Developer & Cybersecurity Enthusiast',
    template: '%s | Dipan Adhikari',
  },
  description: 'Personal portfolio of Dipan Adhikari - A high-achieving student passionate about cybersecurity, software development, infrastructure engineering, and technology entrepreneurship.',
  keywords: [
    'Dipan Adhikari',
    'Cybersecurity',
    'Software Developer',
    'Student Portfolio',
    'Computer Science',
    'Infrastructure Engineer',
    'Technology Entrepreneur',
    'Model United Nations',
  ],
  authors: [{ name: 'Dipan Adhikari' }],
  creator: 'Dipan Adhikari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dipan-adhikari.dev',
    siteName: 'Dipan Adhikari',
    title: 'Dipan Adhikari — Student, Developer & Cybersecurity Enthusiast',
    description: 'Personal portfolio showcasing cybersecurity research, software development projects, and academic achievements.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dipan Adhikari Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dipan Adhikari — Student, Developer & Cybersecurity Enthusiast',
    description: 'Personal portfolio showcasing cybersecurity research, software development projects, and academic achievements.',
    images: ['/og-image.png'],
    creator: '@dipan_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
