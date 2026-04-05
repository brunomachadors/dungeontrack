'use client';

import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';
import AuthenticatedActions from '../navigation/AuthenticatedActions';
import HeaderBrand from '../navigation/HeaderBrand';
import MobileMenu from '../navigation/MobileMenu';
import PublicAuthActions from '../navigation/PublicAuthActions';
import PublicNavigation from '../navigation/PublicNavigation';

function Header() {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/20 bg-amber-100/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <HeaderBrand />

        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 md:flex">
          {!isSignedIn ? (
            <>
              <PublicNavigation />
              <PublicAuthActions />
            </>
          ) : (
            <AuthenticatedActions />
          )}
        </nav>

        <button
          className="font-display text-2xl text-stone-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {open ? <MobileMenu isSignedIn={Boolean(isSignedIn)} onClose={() => setOpen(false)} /> : null}
    </header>
  );
}

export default Header;
