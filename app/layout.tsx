import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
