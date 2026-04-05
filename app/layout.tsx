import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Cinzel, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { clerkAppearance } from './config/clerkAppearance';
import Header from './components/Header';
import Footer from './components/Footer';

const bodyFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const displayFont = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'DungeonTrack',
  description:
    'Gerencie campanhas de RPG, personagens e sessões em uma jornada organizada.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <ClerkProvider appearance={clerkAppearance}>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
