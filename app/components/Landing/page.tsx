import AboutSection from '../Sections/About/page';
import FeaturesSection from '../Sections/Features/page';
import HeroSection from '../Sections/Hero/page';

function LandingPage() {
  return (
    <main className="page-shell">
      <div className="flex min-h-screen w-full flex-col">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </div>
    </main>
  );
}

export default LandingPage;
