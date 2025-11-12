import Navigation from "@/components/Navigation";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Documentation from "@/components/Documentation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navigation />
      <Hero />
      <Features />
      <Solutions />
      <Integrations />
      <Pricing />
      <Documentation />
      <Footer />
    </div>
  );
};

export default Index;
