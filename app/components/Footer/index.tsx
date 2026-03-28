import LinkButton from '../LinkButtons';
import SectionContainer from '../ui/SectionContainer';

export default function Footer() {
  return (
    <footer className="border-t border-amber-950/20 bg-linear-to-b from-amber-950 to-stone-950 px-6 py-10 text-amber-100">
      <SectionContainer className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-lg font-bold uppercase tracking-[0.14em]">
            DungeonTrack
          </p>
          <p className="mt-2 text-base leading-relaxed text-amber-100/85">
            Um grimorio digital para registrar campanhas, herois, sessoes e tudo
            o que merece permanecer nas cronicas da mesa.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-amber-300/80">
            {new Date().getFullYear()} • Feito para mestres e aventureiros
          </p>
        </div>

        <section className="flex flex-wrap gap-3">
          <LinkButton href="#sobre" text="O Reino" />
          <LinkButton href="#recursos" text="Recursos" />
          <LinkButton href="#jornada" text="Jornada" />
        </section>

        <section className="flex flex-wrap gap-3">
          <LinkButton
            href="https://github.com/brunomachadors/dungeontrack"
            text="GitHub"
            external
          />
          <LinkButton href="/login" text="Entrar" />
          <LinkButton href="/sign-in" text="Criar Conta" />
        </section>
      </SectionContainer>
    </footer>
  );
}
