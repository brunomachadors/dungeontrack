import Link from 'next/link';
import type { ReactNode } from 'react';

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
};

function ActionLink({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ActionLinkProps) {
  const variantClass =
    variant === 'primary' ? 'ink-button-primary' : 'ink-button-secondary';

  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={`ink-button ${variantClass} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

export default ActionLink;
