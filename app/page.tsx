import Navbar from '@/components/Navbar';
import FestiveBanner from '@/components/FestiveBanner';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <FestiveBanner />
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
