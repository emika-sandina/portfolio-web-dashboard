import SectionReveal from "./SectionReveal";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineSparkles, HiOutlineCpuChip, HiOutlineChartBar } from "react-icons/hi2";

const featuredProjects = [
  {
    id: "axiom-ai",
    title: "Axiom AI",
    tagline: "AI-Powered Coding Mentor Platform",
    type: "Full-Stack Individual Project",
    status: "Live Platform",
    icon: HiOutlineSparkles,
    badgeClass: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    description: [
      "Built a full-stack AI coding mentor platform where users improve their problem-solving skills through structured, feedback-driven practice.",
      "Designed a workflow that requires users to explain their approach before accessing the code editor, encouraging independent thinking rather than simply copying solutions.",
      "Connected the OpenRouter API to evaluate user explanations and provide step-by-step feedback with DeepSeek reasoning models.",
    ],
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "OpenRouter API",
      "DeepSeek",
      "Monaco Editor",
      "Tailwind CSS",
    ],
    github: "https://github.com/emika-sandina",
    highlights: ["Interactive Monaco Code Editor", "Approach-Before-Code Pipeline", "Real-Time AI Feedback"],
  },
  {
    id: "dengue-guard",
    title: "DengueGuard",
    tagline: "Full-Stack + Machine Learning Platform",
    type: "Group Project (Led team of 5)",
    status: "Shipped (Hult Prize 2026)",
    icon: HiOutlineCpuChip,
    badgeClass: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    description: [
      "Led a team of five to design and build a full-stack web platform that allows users to report dengue cases and predict future weekly case counts.",
      "Designed UI/UX prototypes in Figma and built responsive frontend pages and components using React.js.",
      "Built RESTful APIs using Express.js and integrated Supabase for real-time database storage.",
      "Trained an XGBoost machine learning model using historical dengue data to forecast weekly case numbers.",
    ],
    technologies: [
      "React.js",
      "Express.js",
      "Supabase",
      "Python",
      "XGBoost",
      "Figma",
      "REST APIs",
    ],
    github: "https://github.com/emika-sandina",
    highlights: ["Team Lead (5 Engineers)", "XGBoost Case Forecasting", "Real-Time Hotspot Mapping", "Hult Prize 2026 Participant"],
  },
];

const secondaryProjects = [
  {
    id: "loan-prediction",
    title: "Loan Approval & Eligibility Prediction System",
    tagline: "ML-Powered Financial Decision Engine",
    type: "Machine Learning Individual Project",
    status: "Completed",
    icon: HiOutlineChartBar,
    description: [
      "Performed comprehensive software analysis on a dataset of 58,000+ bank clients to predict loan approval decisions and determine eligibility amounts.",
      "Trained and compared three classification algorithms (KNN, Logistic Regression, Naïve Bayes), selecting KNN as the best individual performer.",
      "Created a soft-voting ensemble model combining KNN and Logistic Regression, which outperformed all individual models.",
      "Fine-tuned using GridSearchCV and built decision tree models to predict loan amounts with significantly better generalization.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "KNN",
      "Logistic Regression",
      "Ensemble Learning",
      "Decision Trees",
      "GridSearchCV",
    ],
    github: "https://github.com/emika-sandina",
    highlights: ["58,000+ Records Analyzed", "Soft-Voting Ensemble", "GridSearchCV Hyperparameter Tuning"],
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="section-shell">
        <SectionReveal>
          <span className="section-badge">Featured Work</span>
          <h2 className="section-heading">Engineered Products & Projects</h2>
          <p className="section-subtext">
            Production-oriented full-stack web applications and machine learning systems built to solve real problems.
          </p>
        </SectionReveal>

        {/* Featured Projects Spotlights (Axiom AI & DengueGuard) */}
        <div className="mt-14 space-y-12">
          {featuredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <SectionReveal
                key={project.id}
                delay={0.1 + idx * 0.1}
                className="editorial-card-interactive p-6 md:p-10 relative overflow-hidden group"
              >
                {/* Subtle ambient highlight */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/[0.07] via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Project Details (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-medium uppercase tracking-wider ${project.badgeClass}`}>
                          <Icon className="h-3.5 w-3.5" />
                          {project.type}
                        </span>
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-400">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl sm:text-3xl font-bold font-display text-[#f0f0f0] group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base font-medium text-slate-400">
                        {project.tagline}
                      </p>

                      {/* Bulleted Sentences */}
                      <ul className="mt-6 space-y-3">
                        {project.description.map((sentence, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#a0a0a0]">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{sentence}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key highlights chips */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.highlights.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 px-2.5 py-1 rounded-md"
                          >
                            <span>✓</span>
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips & Action Link */}
                    <div className="mt-8 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-xs font-mono text-[#a0a0a0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-[#f0f0f0] hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                        >
                          <FaGithub className="h-4 w-4" />
                          <span>Code Repository</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Technical Specification Block (5 cols) */}
                  <div className="lg:col-span-5 h-full flex flex-col justify-center">
                    <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-5 sm:p-6 shadow-inner">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#a0a0a0]">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-red-500/80 inline-block" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/80 inline-block" />
                          <span className="h-2 w-2 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="ml-2 text-slate-300 font-semibold">{project.id}.manifest</span>
                        </span>
                        <span className="text-cyan-400 font-mono text-[11px]">{project.status}</span>
                      </div>

                      <div className="mt-4 font-mono text-xs leading-relaxed space-y-2 text-[#a0a0a0]">
                        <p className="text-slate-600">// Architecture Overview</p>
                        <p>
                          <span className="text-indigo-400">system</span>{" "}
                          <span className="text-cyan-300">"{project.title}"</span> {"{"}
                        </p>
                        <p className="pl-4">
                          <span className="text-slate-500">primary_frontend:</span>{" "}
                          <span className="text-emerald-400">"{project.technologies[0]}"</span>;
                        </p>
                        <p className="pl-4">
                          <span className="text-slate-500">backend_api:</span>{" "}
                          <span className="text-emerald-400">"{project.technologies[1]}"</span>;
                        </p>
                        <p className="pl-4">
                          <span className="text-slate-500">core_module:</span>{" "}
                          <span className="text-emerald-400">"{project.technologies[3]}"</span>;
                        </p>
                        <p className="pl-4">
                          <span className="text-slate-500">production_readiness:</span>{" "}
                          <span className="text-cyan-300">"Verified"</span>;
                        </p>
                        <p>{"}"}</p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#a0a0a0]">
                        <span>Author: Emika Sandina</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Complete
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Machine Learning Project 3 */}
        <div className="mt-12">
          {secondaryProjects.map((project) => (
            <SectionReveal
              key={project.id}
              className="editorial-card-interactive p-6 md:p-8"
              delay={0.2}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-mono font-medium uppercase tracking-wider text-emerald-400">
                      {project.type}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-mono text-slate-400">
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-[#f0f0f0]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-mono text-cyan-400">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bulleted Sentences for Project 3 */}
                  <ul className="space-y-2.5 pt-1">
                    {project.description.map((sentence, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-[#a0a0a0]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{sentence}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5 rounded">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-xs font-mono text-[#a0a0a0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 self-start lg:self-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-[#f0f0f0] hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
