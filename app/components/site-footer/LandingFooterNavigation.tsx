import LinkButton from '../LinkButtons';

function LandingFooterNavigation() {
  return (
    <>
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
      </section>
    </>
  );
}

export default LandingFooterNavigation;
