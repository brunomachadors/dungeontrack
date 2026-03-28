import Link from 'next/link';

type LinkButtonProps = { href: string; external?: boolean; text: string };

function LinkButton({ href, text, external = false }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className="footer-link rounded-full border border-amber-100/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-amber-100 hover:border-amber-100/70 hover:bg-amber-50/10"
    >
      {text}
    </Link>
  );
}

export default LinkButton;
