import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BookingSection } from "@/components/sections/BookingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LiveChatWidget } from "@/components/widgets/LiveChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <AboutSection />
        <TestimonialsSection />
        <ServiceAreaSection />
        <BookingSection />
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
};

export default Index;
