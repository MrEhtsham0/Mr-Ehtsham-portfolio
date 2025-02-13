import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import TechnologySection from "./components/TechSection";
import TestimonialSection from "./components/TestimonialSection";
import SoftSkillsAndTips from "./components/SoftSkillsAndTips";
import dynamic from 'next/dynamic'
import CareerTimeline from "./components/CarrierTimeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <TechnologySection />
        <AboutSection />
        <CareerTimeline />
        <SoftSkillsAndTips />
        <ProjectsSection />
        <TestimonialSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
