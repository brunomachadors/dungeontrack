'use client';

import { usePathname } from 'next/navigation';
import DashboardFooterNote from '../site-footer/DashboardFooterNote';
import FooterBrand from '../site-footer/FooterBrand';
import LandingFooterNavigation from '../site-footer/LandingFooterNavigation';
import SectionContainer from '../ui/SectionContainer';

export default function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <footer className="border-t border-amber-950/20 bg-linear-to-b from-amber-950 to-stone-950 px-6 py-10 text-amber-100">
      <SectionContainer className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <FooterBrand />

        {isDashboard ? <DashboardFooterNote /> : <LandingFooterNavigation />}
      </SectionContainer>
    </footer>
  );
}
