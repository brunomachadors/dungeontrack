import ActionLink from '../../ui/ActionLink';
import NoticeCard from '../../ui/NoticeCard';
import SectionContainer from '../../ui/SectionContainer';
import SectionHeading from '../../ui/SectionHeading';

function FeaturesSection() {
  return (
    <section id="recursos" className="px-6 pb-20 pt-8 md:px-10 lg:px-16">
      <SectionContainer>
        <div className="paper-panel rounded-[30px] px-7 py-10 sm:px-10 sm:py-12">
          <SectionHeading
            eyebrow="Recursos em destaque"
            title="Ferramentas pensadas para mesas que vivem grandes cronicas."
            description="Esta primeira versao da landing apresenta a visao do produto e o tipo de experiencia que o DungeonTrack quer entregar aos grupos de RPG: organizacao, memoria e atmosfera."
            className="max-w-3xl"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <NoticeCard
              eyebrow="Registro de campanhas"
              title="Sua historia, capitulo por capitulo"
              className="py-7"
            >
              <p>
                Reuna titulo, sistema, membros do grupo, resumos e acontecimentos
                marcantes em um espaco facil de navegar.
              </p>
            </NoticeCard>

            <NoticeCard
              eyebrow="Fichas de personagens"
              title="Herois sempre a mao"
              className="py-7"
            >
              <p>
                Consulte atributos, classe, anotacoes e progresso dos
                personagens sem depender de arquivos espalhados.
              </p>
            </NoticeCard>

            <NoticeCard
              eyebrow="Diario de sessoes"
              title="Memorias de cada encontro"
              className="py-7"
            >
              <p>
                Guarde pistas, loot, mortes dramaticas e viradas de roteiro para
                revisitar a jornada quando quiser.
              </p>
            </NoticeCard>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <NoticeCard
              eyebrow="Proximo passo"
              title="Uma base visual pronta para crescer"
              className="py-7"
            >
              <p>
                Com a identidade da landing definida, fica mais facil expandir o
                restante da aplicacao mantendo consistencia entre dashboard,
                formularios e paginas internas.
              </p>
            </NoticeCard>

            <NoticeCard eyebrow="Chamado da guilda" className="py-7">
              <p>
                Se a ideia e criar um sistema acolhedor para RPGistas, a landing
                agora ja comunica isso com mais personalidade e contexto.
              </p>
              <ActionLink href="/sign-in" className="mt-5">
                Comecar aventura
              </ActionLink>
            </NoticeCard>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default FeaturesSection;
