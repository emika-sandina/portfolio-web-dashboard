import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="relative overflow-hidden bg-brandWhite">
      <motion.div
        className="pointer-events-none absolute -right-24 top-36 h-72 w-72 rounded-full bg-brandLightBlue/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      />
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <ThemeToggle />
    </div>
  );
}

export default App;
