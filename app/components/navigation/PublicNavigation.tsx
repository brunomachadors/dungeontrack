import Link from 'next/link';
import { publicNavigationLinks } from './navigation-links';

type PublicNavigationProps = {
  onNavigate?: () => void;
};

function PublicNavigation({ onNavigate }: PublicNavigationProps) {
  return (
    <>
      {publicNavigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="nav-link"
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default PublicNavigation;
