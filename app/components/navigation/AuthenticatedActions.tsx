import { SignOutButton } from '@clerk/nextjs';
import ActionLink from '../ui/ActionLink';

const secondaryButtonClass = 'ink-button ink-button-secondary px-5 py-3 text-xs';

function AuthenticatedActions() {
  return (
    <>
      <ActionLink href="/dashboard" className="px-5 py-3 text-xs">
        Dashboard
      </ActionLink>
      <SignOutButton redirectUrl="/">
        <button type="button" className={secondaryButtonClass}>
          Logout
        </button>
      </SignOutButton>
    </>
  );
}

export default AuthenticatedActions;
