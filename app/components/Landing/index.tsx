import AboutSection from '../sections/About';
import FeaturesSection from '../sections/Features';
import HeroSection from '../sections/Hero';

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
