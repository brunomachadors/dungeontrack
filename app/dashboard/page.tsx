import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import SectionContainer from '../components/ui/SectionContainer';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/');
  }

  const user = await currentUser();
  const firstName = user?.firstName || user?.username || 'Aventureiro';
  const email = user?.emailAddresses[0]?.emailAddress;

  return (
    <main className="page-shell px-6 py-16 md:px-10 lg:px-16">
      <SectionContainer>
        <section className="paper-panel rounded-[30px] px-7 py-10 sm:px-10 sm:py-12">
          <p className="font-display section-title text-sm font-semibold text-red-800">
            Sala do aventureiro
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Bem-vindo, {firstName}.
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-stone-700">
            Seu acesso com Clerk esta funcionando e a area autenticada ja esta
            pronta para crescer. A partir daqui podemos comecar a construir as
            telas de campanhas, personagens e sessoes.
          </p>
          <div className="mt-8 wanted-card rounded-3xl px-6 py-7">
            <p className="font-display text-sm uppercase tracking-[0.18em] text-red-800">
              Status da sessao
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-stone-900">
              Autenticacao ativa
            </h2>
            <div className="mt-3 space-y-3 text-lg leading-relaxed text-stone-700">
              <p>Usuario autenticado com sucesso no projeto.</p>
              {email ? <p>Email atual: {email}</p> : null}
            </div>
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
