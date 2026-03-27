'use client';

import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-amber-100  w-full  border-amber-900 border-b-2">
      <div className="flex max-w-7xl mx-auto p-4 justify-between">
        {/*LOGO*/}
        <div className="text-amber-950">
          <Link href={'/'} className="text-xl font-bold">
            🎲 DungeonTrack
          </Link>
        </div>

        {/*MENU DESKTOP*/}
        <div className="hidden md:flex gap-6 text-amber-900">
          <Link href={'/login'}>LOGIN</Link>
          <Link href={'/sign-in'}>SIGN-IN</Link>
          <Link href={'/about'}>ABOUT</Link>
          <Link href={'/contact'}>CONTACT</Link>
        </div>

        {/*MENU MOBILE*/}
        <button
          className="md:hidden text-2xl text-amber-950"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/*MENU DESKTOP*/}
      {open && (
        <div className="md:hidden text-amber-900 flex gap-2 p-4 flex-col items-end">
          <Link href={'/login'} onClick={() => setOpen(!open)}>
            LOGIN
          </Link>
          <Link href={'/sign-in'} onClick={() => setOpen(!open)}>
            SIGN-IN
          </Link>
          <Link href={'/about'} onClick={() => setOpen(!open)}>
            ABOUT
          </Link>
          <Link href={'/contact'} onClick={() => setOpen(!open)}>
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
