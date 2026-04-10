'use client';

import { SignInButton } from '@clerk/nextjs';

type SignInActionProps = {
  children: React.ReactNode;
  className?: string;
};

function SignInAction({ children, className = '' }: SignInActionProps) {
  return (
    <SignInButton mode="modal" forceRedirectUrl="/dashboard">
      <button
        type="button"
        className={`ink-button ink-button-secondary ${className}`.trim()}
      >
        {children}
      </button>
    </SignInButton>
  );
}

export default SignInAction;
