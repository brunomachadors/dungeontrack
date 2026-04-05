import Link from 'next/link';

function HeaderBrand() {
  return (
    <div className="text-stone-900">
      <Link
        href="/"
        className="font-display text-xl font-bold tracking-[0.18em] uppercase"
      >
        DungeonTrack
      </Link>
      <p className="text-xs uppercase tracking-[0.3em] text-stone-700">
        Tomo das Aventuras
      </p>
    </div>
  );
}

export default HeaderBrand;
