import SectionReveal from "./SectionReveal";
import { HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineUserGroup, HiOutlineSparkles } from "react-icons/hi2";

const highlights = [
  {
    icon: HiOutlineUserGroup,
    title: "Engineering Leadership",
    description: "Led a cross-functional team of 5 engineers on DengueGuard, driving end-to-end system design from Figma UI to XGBoost predictive modeling.",
  },
  {
    icon: HiOutlineCodeBracket,
    title: "Full-Stack Proficiency",
    description: "Architecting responsive React frontends, robust Node.js/Express REST APIs, and integrated database layers with Supabase and SQL.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "Applied AI & ML",
    description: "Building production ML workflows with XGBoost, Scikit-learn algorithms, ensemble learning, and LLM reasoning APIs via OpenRouter.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Product Execution",
    description: "Distinction academic record combined with active industry experience at Corzent and Conex Codeworks shipping real software.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="section-shell">
        <SectionReveal>
          <span className="section-badge">Background & Focus</span>
          <h2 className="section-heading">Engineering software from concept to reality.</h2>
        </SectionReveal>

        {/* Editorial Narrative & Strengths Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Paragraphs (6 cols) */}
          <SectionReveal className="lg:col-span-6 space-y-5 text-base md:text-lg leading-relaxed text-[#a0a0a0] font-light" delay={0.1}>
            <p>
              I'm a <strong className="font-semibold text-[#f0f0f0]">Computer Science undergraduate at the University of Westminster</strong> with hands-on experience building full-stack applications and AI-powered solutions.
            </p>
            <p>
              I enjoy taking ideas from concept to working products, whether that involves designing user interfaces, building APIs, working with databases, or developing machine learning models.
            </p>
            <p>
              I'm particularly interested in software engineering, product development, AI, and solving real-world problems through technology.
            </p>
            <p>
              Currently, I'm focused on growing as a software engineer while gaining experience building real products and collaborating with engineering teams.
            </p>

            <div className="pt-4 flex items-center gap-6 border-t border-white/[0.06]">
              <div>
                <span className="block text-2xl font-bold font-display text-cyan-400">Team Lead</span>
                <span className="text-xs text-[#a0a0a0] font-mono uppercase tracking-wider">5 Engineers</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="block text-2xl font-bold font-display text-[#f0f0f0]">Distinction</span>
                <span className="text-xs text-[#a0a0a0] font-mono uppercase tracking-wider">Top Academic Grade</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="block text-2xl font-bold font-display text-emerald-400">Corzent</span>
                <span className="text-xs text-[#a0a0a0] font-mono uppercase tracking-wider">SE Intern</span>
              </div>
            </div>
          </SectionReveal>

          {/* Core Strengths (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SectionReveal
                  key={item.title}
                  delay={0.15 + idx * 0.05}
                  className="editorial-card p-5 group hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#f0f0f0] group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#a0a0a0]">
                    {item.description}
                  </p>
                </SectionReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
