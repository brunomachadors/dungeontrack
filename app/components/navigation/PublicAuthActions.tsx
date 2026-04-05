import { SignInButton, SignUpButton } from '@clerk/nextjs';

const secondaryButtonClass = 'ink-button ink-button-secondary px-5 py-3 text-xs';
const primaryButtonClass = 'ink-button ink-button-primary px-5 py-3 text-xs';

function PublicAuthActions() {
  return (
    <>
      <SignInButton mode="modal" forceRedirectUrl="/dashboard">
        <button type="button" className={secondaryButtonClass}>
          Entrar
        </button>
      </SignInButton>
      <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
        <button type="button" className={primaryButtonClass}>
          Criar Conta
        </button>
      </SignUpButton>
    </>
  );
}

export default PublicAuthActions;
