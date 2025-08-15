import SidebarLayout from "../components/SidebarLayout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <SidebarLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </SidebarLayout>
  );
}
