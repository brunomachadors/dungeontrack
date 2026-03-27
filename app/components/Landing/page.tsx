import AboutSection from '../Sections/About/page';
import FeaturesSection from '../Sections/Features/page';
import HeroSection from '../Sections/Hero/page';

function LandingPage() {
  return (
    <main>
      <div className="flex h-screen flex-col w-full">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </div>
    </main>
  );
}

export default LandingPage;
