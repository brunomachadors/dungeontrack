import NoticeCard from '../../ui/NoticeCard';
import SectionContainer from '../../ui/SectionContainer';
import SectionHeading from '../../ui/SectionHeading';

function AboutSection() {
  return (
    <section id="sobre" className="px-6 py-16 md:px-10 lg:px-16">
      <SectionContainer className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="paper-panel rounded-[28px] px-7 py-8 sm:px-10">
          <SectionHeading
            eyebrow="O Reino"
            title="Uma biblioteca viva para cada campanha."
            description="O projeto nasceu para resolver um problema comum em mesas de RPG: fichas desencontradas, resumos perdidos e informacoes importantes espalhadas em varios lugares. A proposta do DungeonTrack e reunir tudo em um unico painel com alma medieval."
          />
          <p className="mt-4 text-xl leading-relaxed text-stone-700">
            Em vez de uma interface fria, a ideia e que cada tela lembre um
            pergaminho de campanha, um mural de taverna ou um cartaz antigo da
            cidade, tornando a organizacao parte da fantasia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <NoticeCard eyebrow="Para Mestres" title="Controle da campanha">
            <p>
              Visualize grupos, acontecimentos, NPCs e os proximos passos da
              aventura com mais clareza.
            </p>
          </NoticeCard>

          <NoticeCard eyebrow="Para Jogadores" title="Historia do personagem">
            <p>
              Acompanhe evolucao, inventario, aliados e as marcas deixadas por
              cada sessao na jornada do heroi.
            </p>
          </NoticeCard>

          <NoticeCard
            eyebrow="Identidade"
            title="Interface inspirada em pergaminhos e editais de aventura"
            className="md:col-span-2"
          >
            <p>
              Bordas ornamentadas, tons de papel envelhecido, tipografia
              classica e blocos que lembram cartas de procurado ajudam a dar
              personalidade ao projeto desde a primeira dobra do site.
            </p>
          </NoticeCard>
        </div>
      </SectionContainer>
    </section>
  );
}
export default AboutSection;
