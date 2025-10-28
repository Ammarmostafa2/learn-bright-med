import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoLibrarySection from "@/components/VideoLibrarySection";
import PracticeSection from "@/components/PracticeSection";
import DemoSection from "@/components/DemoSection";
import StudyNotesSection from "@/components/StudyNotesSection";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <VideoLibrarySection />
      <PracticeSection />
      <div id="demo">
        <DemoSection />
      </div>
      <StudyNotesSection />
      <div id="pricing">
        <Pricing />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
