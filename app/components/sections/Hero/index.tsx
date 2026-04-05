import SignUpAction from '../../auth/SignUpAction';
import ActionLink from '../../ui/ActionLink';
import NoticeCard from '../../ui/NoticeCard';
import SectionContainer from '../../ui/SectionContainer';

function HeroSection() {
  return (
    <section
      id="jornada"
      className="section-frame relative isolate flex min-h-[calc(100vh-88px)] items-center px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="hero-glow left-[-8rem] top-20" />
      <div className="hero-glow bottom-0 right-[-7rem]" />

      <SectionContainer className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="paper-panel texture-dots rounded-[28px] px-7 py-10 sm:px-10 sm:py-12 lg:px-12">
          <p className="font-display section-title text-sm font-semibold text-red-800">
            Cronicas, fichas e campanhas em um so lugar
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
            O quadro de avisos da sua mesa de RPG ganhou vida.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone-700">
            DungeonTrack foi criado para aventureiros e mestres que querem
            organizar personagens, registrar sessoes e acompanhar cada campanha
            como se estivessem folheando um antigo pergaminho da guilda.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <SignUpAction>Recrutar meu grupo</SignUpAction>
            <ActionLink href="#recursos" variant="secondary">
              Explorar recursos
            </ActionLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <NoticeCard
              eyebrow="Campanhas"
              className="rounded-[22px] px-5 py-5"
              contentClassName="leading-snug"
            >
              <p className="text-3xl font-semibold text-stone-900">01</p>
              <p className="mt-2">
                Organize mundos, grupos e sessoes sem perder o fio da historia.
              </p>
            </NoticeCard>

            <NoticeCard
              eyebrow="Personagens"
              className="rounded-[22px] px-5 py-5"
              contentClassName="leading-snug"
            >
              <p className="text-3xl font-semibold text-stone-900">02</p>
              <p className="mt-2">
                Registre fichas, classes, talentos e o progresso de cada heroi.
              </p>
            </NoticeCard>

            <NoticeCard
              eyebrow="Sessoes"
              className="rounded-[22px] px-5 py-5"
              contentClassName="leading-snug"
            >
              <p className="text-3xl font-semibold text-stone-900">03</p>
              <p className="mt-2">
                Mantenha um diario com eventos, pistas e decisoes importantes.
              </p>
            </NoticeCard>
          </div>
        </div>

        <aside className="paper-panel rounded-[30px] px-7 py-8 sm:px-9">
          <div className="ornate-divider">
            <span className="font-display inline-block bg-amber-200 px-5 text-xs font-semibold uppercase tracking-[0.3em] text-stone-700">
              Edital da Guilda
            </span>
          </div>

          <div className="mt-7 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-stone-700/30 bg-amber-50/50">
              <div className="wax-badge flex h-16 w-16 items-center justify-center text-5xl text-[#f7ead0]">
                ⚔
              </div>
            </div>

            <h2 className="font-display mt-6 text-3xl font-bold uppercase tracking-[0.12em] text-stone-900">
              Procuram-se cronistas
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-stone-700">
              Mestres cansados de perder anotacoes e jogadores que querem
              acompanhar a jornada completa do proprio personagem.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <NoticeCard eyebrow="Missao" className="rounded-[20px] px-5 py-4">
              <p>
                Centralizar campanhas, fichas e acontecimentos importantes num
                ambiente bonito, claro e facil de consultar.
              </p>
            </NoticeCard>

            <NoticeCard
              eyebrow="Recompensa"
              className="rounded-[20px] px-5 py-4"
            >
              <p>
                Mais tempo jogando, menos tempo procurando papeis soltos e notas
                espalhadas.
              </p>
            </NoticeCard>
          </div>
        </aside>
      </SectionContainer>
    </section>
  );
}

export default HeroSection;
