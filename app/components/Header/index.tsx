'use client';

import Link from 'next/link';
import { useState } from 'react';
import ActionLink from '../ui/ActionLink';

function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: '#jornada', label: 'Jornada' },
    { href: '#sobre', label: 'O Reino' },
    { href: '#recursos', label: 'Recursos' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/20 bg-amber-100/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="text-stone-900">
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-[0.18em] uppercase"
          >
            DungeonTrack
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-700">
            Tomo das Aventuras
          </p>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <ActionLink
            href="/login"
            variant="secondary"
            className="px-5 py-3 text-xs"
          >
            Entrar
          </ActionLink>
          <ActionLink href="/sign-in" className="px-5 py-3 text-xs">
            Criar Conta
          </ActionLink>
        </nav>

        <button
          className="font-display text-2xl text-stone-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-amber-900/15 bg-amber-50/95 px-5 py-4 md:hidden">
          <div className="flex flex-col items-start gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Entrar
            </Link>
            <Link
              href="/sign-in"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Criar Conta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
