import type { ReactNode } from 'react';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return <div className={`mx-auto max-w-7xl ${className}`.trim()}>{children}</div>;
}

export default SectionContainer;
