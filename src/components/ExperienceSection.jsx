import SectionReveal from "./SectionReveal";
import { HiOutlineBuildingOffice2, HiOutlineCalendar, HiOutlineMapPin } from "react-icons/hi2";

const experiences = [
  {
    role: "Software Engineer (Intern)",
    company: "Corzent",
    type: "Internship",
    period: "September 2026 – Present",
    location: "Colombo, Western Province, Sri Lanka",
    arrangement: "Hybrid",
    isCurrent: true,
    focus: "Contributing to engineering projects, participating in agile software delivery workflows, and building full-stack components.",
  },
  {
    role: "Software Engineer",
    company: "Conex Codeworks",
    type: "Internship",
    period: "June 2026 – September 2026",
    duration: "4 months",
    location: "Colombo, Western Province, Sri Lanka",
    arrangement: "Hybrid",
    isCurrent: false,
    focus: "Collaborated in developing full-stack web applications, RESTful APIs, and responsive frontend interfaces.",
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-white/[0.06] bg-[#0c0c0c]/70">
      <div className="section-shell">
        <SectionReveal>
          <span className="section-badge">Career & Industry</span>
          <h2 className="section-heading">Industry Experience</h2>
          <p className="section-subtext">
            Professional software engineering internships, building software within engineering teams.
          </p>
        </SectionReveal>

        {/* Timeline Container */}
        <div className="mt-14 relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <SectionReveal
                key={`${exp.company}-${exp.period}`}
                delay={0.1 + idx * 0.1}
                className="relative md:pl-20"
              >
                {/* Timeline node marker */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#121212] shadow-md">
                  <span className={`h-2.5 w-2.5 rounded-full ${exp.isCurrent ? "bg-cyan-400 animate-pulse" : "bg-slate-600"}`} />
                </div>

                {/* Experience Card */}
                <div className={`editorial-card p-6 md:p-8 relative overflow-hidden transition-all duration-300 ${
                  exp.isCurrent ? "border-cyan-500/30 bg-[#141414] shadow-glow" : "hover:border-white/20"
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/[0.06] pb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold font-display text-[#f0f0f0]">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-2.5 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-base font-medium text-cyan-400">
                        <HiOutlineBuildingOffice2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-[#a0a0a0] font-mono bg-white/[0.04] px-2 py-0.5 rounded">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-[#a0a0a0]">
                      <div className="flex items-center gap-1.5">
                        <HiOutlineCalendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                        {exp.duration && <span className="text-slate-500">({exp.duration})</span>}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <HiOutlineMapPin className="h-3.5 w-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                        <span className="text-slate-700">|</span>
                        <span className="text-cyan-300">{exp.arrangement}</span>
                      </div>
                    </div>
                  </div>

                  {/* Role summary */}
                  <div className="mt-5 text-sm leading-relaxed text-[#a0a0a0]">
                    <p>{exp.focus}</p>
                  </div>

                </div>
              </SectionReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
