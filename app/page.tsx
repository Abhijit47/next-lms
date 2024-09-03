import CTASection from './_components/CTASection';
import HeroSection from './_components/HeroSection';
import LogoSection from './_components/LogoSection';
import OurProcessSection from './_components/OurProcessSection';
import OurServiceSection from './_components/OurServiceSection';
import StatSection from './_components/StatSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoSection />
      <OurProcessSection />
      <OurServiceSection />
      <StatSection />
      <CTASection />
    </main>
  );
}
