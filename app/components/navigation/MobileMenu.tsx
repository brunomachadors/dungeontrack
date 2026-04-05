import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import SignInAction from '../auth/SignInAction';
import SignUpAction from '../auth/SignUpAction';
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
            <SignInAction
              className="text-sm uppercase tracking-[0.14em] text-stone-700"
            >
              Entrar
            </SignInAction>
            <SignUpAction
              className="text-sm uppercase tracking-[0.14em] text-amber-100"
            >
              Criar Conta
            </SignUpAction>
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
