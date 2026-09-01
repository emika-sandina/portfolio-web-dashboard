import SectionReveal from "./SectionReveal";
import {
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineCommandLine,
  HiOutlineCircleStack,
  HiOutlineCpuChip,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
} from "react-icons/hi2";

const skillCategories = [
  {
    title: "Frontend",
    icon: HiOutlineCodeBracket,
    skills: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: HiOutlineServerStack,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"],
  },
  {
    title: "Programming Languages",
    icon: HiOutlineCommandLine,
    skills: ["JavaScript", "Python", "Java", "C#"],
  },
  {
    title: "Databases",
    icon: HiOutlineCircleStack,
    skills: ["MySQL", "Supabase", "PostgreSQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: HiOutlineCpuChip,
    skills: [
      "Scikit-learn",
      "Pandas",
      "Classification",
      "Regression",
      "LLM APIs",
      "Prompt Engineering",
      "Feature Engineering",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "GridSearchCV",
    ],
  },
  {
    title: "Tools",
    icon: HiOutlineWrenchScrewdriver,
    skills: ["GitHub", "Git", "Postman", "Vercel", "Netlify", "Figma", "Trello"],
  }
];

function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-white/[0.06] bg-[#0c0c0c]/50">
      <div className="section-shell">
        <SectionReveal>
          <span className="section-badge">Technologies</span>
          <h2 className="section-heading">Skills & Stack</h2>
          <p className="section-subtext">
            A concrete overview of engineering languages, backend frameworks, databases, and AI tooling I utilize.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isWide = category.skills.length > 5;

            return (
              <SectionReveal
                key={category.title}
                delay={0.06 + idx * 0.04}
                className={`editorial-card p-6 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold font-display text-[#f0f0f0] group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 text-xs font-mono text-[#f0f0f0] hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#a0a0a0]">
                  <span>{category.skills.length} tools & skills</span>
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">Production stack</span>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
