'use client';

import { SignUpButton } from '@clerk/nextjs';

type SignUpActionProps = {
  children: React.ReactNode;
  className?: string;
};

function SignUpAction({ children, className = '' }: SignUpActionProps) {
  return (
    <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
      <button
        type="button"
        className={`ink-button ink-button-primary ${className}`.trim()}
      >
        {children}
      </button>
    </SignUpButton>
  );
}

export default SignUpAction;
