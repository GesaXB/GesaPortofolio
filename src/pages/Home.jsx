import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import SidebarLayout from "../components/SidebarLayout";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <SidebarLayout>
      <section id="about">
        <AboutSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <Footer />
    </SidebarLayout>
  );
}
