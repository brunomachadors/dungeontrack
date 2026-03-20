import Link from "next/link";

type LinkButtonProps = { href: string; external?: boolean; text: string };

function LinkButton({ href, text, external = false }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className=" text-amber-950 hover:text-amber-100 hover:bg-amber-950 p-2 border rounded "
    >
      {text}
    </Link>
  );
}

export default LinkButton;
