function FooterBrand() {
  return (
    <div className="max-w-md">
      <p className="font-display text-lg font-bold uppercase tracking-[0.14em]">
        DungeonTrack
      </p>
      <p className="mt-2 text-base leading-relaxed text-amber-100/85">
        Um grimorio digital para registrar campanhas, herois, sessoes e tudo o
        que merece permanecer nas cronicas da mesa.
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.16em] text-amber-300/80">
        {new Date().getFullYear()} • Feito para mestres e aventureiros
      </p>
    </div>
  );
}

export default FooterBrand;
