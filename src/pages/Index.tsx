import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import CommunityDemo from "@/components/CommunityDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <Showcase />
        <Features />
        <CommunityDemo />
        <Gallery />
        <Testimonials />
        <Services />
        <Articles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
