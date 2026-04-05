import { SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import PublicNavigation from './PublicNavigation';

type MobileMenuProps = {
  isSignedIn: boolean;
  onClose: () => void;
};

function MobileMenu({ isSignedIn, onClose }: MobileMenuProps) {
  return (
    <div className="border-t border-amber-900/15 bg-amber-50/95 px-5 py-4 md:hidden">
      <div className="flex flex-col items-start gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-700">
        {!isSignedIn ? (
          <>
            <PublicNavigation onNavigate={onClose} />
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <button
                type="button"
                className="font-display text-sm uppercase tracking-[0.14em] text-stone-700"
                onClick={onClose}
              >
                Entrar
              </button>
            </SignInButton>
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <button
                type="button"
                className="font-display text-sm uppercase tracking-[0.14em] text-stone-700"
                onClick={onClose}
              >
                Criar Conta
              </button>
            </SignUpButton>
          </>
        ) : (
          <>
            <Link href="/dashboard" className="nav-link" onClick={onClose}>
              Dashboard
            </Link>
            <SignOutButton redirectUrl="/">
              <button
                type="button"
                className="font-display text-sm uppercase tracking-[0.14em] text-stone-700"
                onClick={onClose}
              >
                Logout
              </button>
            </SignOutButton>
          </>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
