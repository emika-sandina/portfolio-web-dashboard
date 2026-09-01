import SectionReveal from "./SectionReveal";
import { HiOutlineTrophy } from "react-icons/hi2";

function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 md:py-28 border-t border-white/[0.06] bg-[#0a0a0a]/80">
      <div className="section-shell">
        <SectionReveal>
          <span className="section-badge">Recognition</span>
          <h2 className="section-heading">Achievements & Competitions</h2>
        </SectionReveal>

        <div className="mt-10">
          <SectionReveal
            delay={0.1}
            className="editorial-card p-6 md:p-8 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300"
          >
            {/* Subtle amber ambient glow */}
            <div className="absolute top-0 right-0 h-48 w-48 bg-gradient-to-bl from-amber-500/[0.06] to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineTrophy className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-bold font-display text-[#f0f0f0] group-hover:text-amber-300 transition-colors">
                      Hult Prize 2026
                    </h3>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-mono font-medium text-amber-400">
                      Participant
                    </span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#a0a0a0] max-w-2xl">
                    Presented <strong className="font-semibold text-[#f0f0f0]">DengueGuard</strong>, an ML-powered healthcare platform. Demonstrated the real-world application of predictive modeling in public health.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 self-start md:self-center font-mono text-xs text-[#a0a0a0] bg-white/[0.03] border border-white/[0.06] px-3.5 py-2 rounded-xl">
                Global Student Entrepreneurship Challenge
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
