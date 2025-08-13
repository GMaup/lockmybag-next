import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Presentation from '@/components/sections/Presentation';
// import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Rouen from '@/components/sections/Rouen';
import Nantes from '@/components/sections/Nantes';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import AboutUs from '@/components/sections/AboutUs';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Presentation />
        <HowItWorks />
        <Pricing />
        <Rouen />
        <Nantes />
        <FAQ />
        {/* <Services /> */}
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
