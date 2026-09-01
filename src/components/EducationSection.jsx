import SectionReveal from "./SectionReveal";
import { HiOutlineAcademicCap, HiOutlineCalendar } from "react-icons/hi2";

const education = [
  {
    institution: "University of Westminster",
    degree: "BSc (Hons) Computer Science",
    period: "2024 – Present",
    grade: "Undergraduate",
    current: true,
  },
  {
    institution: "Informatics Institute of Technology",
    degree: "Foundation Certificate in Higher Education",
    period: "2023 – 2024",
    grade: "Distinction (Top Grade)",
    current: false,
  },
  {
    institution: "Vidura College",
    degree: "G.C.E Ordinary Level Examination",
    period: "2016 – 2022",
    grade: "Results: 8A 1C",
    current: false,
  },
];

function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-28 border-t border-white/[0.06]">
      <div className="section-shell">
        <SectionReveal>
          <span className="section-badge">Academic Foundations</span>
          <h2 className="section-heading">Education</h2>
          <p className="section-subtext">
            Formal computing education and academic qualifications.
          </p>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {education.map((item, idx) => (
            <SectionReveal
              key={`${item.institution}-${item.period}`}
              delay={0.1 + idx * 0.05}
              className={`editorial-card p-6 flex flex-col justify-between relative overflow-hidden group ${
                item.current ? "border-cyan-500/30 bg-[#141414]" : "hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <HiOutlineAcademicCap className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#a0a0a0]">
                    <HiOutlineCalendar className="h-3.5 w-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold font-display text-[#f0f0f0] group-hover:text-cyan-300 transition-colors">
                  {item.institution}
                </h3>

                <p className="mt-1 text-sm font-medium text-cyan-400">
                  {item.degree}
                </p>

                <div className="mt-3 inline-block rounded-md bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-xs font-mono text-[#f0f0f0]">
                  {item.grade}
                </div>
              </div>

              {item.current && (
                <div className="mt-6 pt-3 border-t border-cyan-500/20 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Currently Enrolled</span>
                </div>
              )}
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
