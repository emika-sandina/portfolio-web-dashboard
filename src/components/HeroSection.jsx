import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineDocumentText } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import profile from "../assets/dp.png";
import cvPdf from "../assets/Emika Sandina CV.pdf";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Minimal subtle ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[650px] max-w-full rounded-full bg-cyan-500/[0.06] blur-[140px] -z-10" />

      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Engineer (Intern) @ Corzent</span>
            </motion.div>

            {/* Main Greeting & Heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f0f0f0] leading-[1.12]">
                Hi, I'm <span className="text-white">Emika Sandina</span>.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                  Software Engineer.
                </span>
              </h1>
            </motion.div>

            {/* Core Message Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-[#a0a0a0] max-w-xl font-normal"
            >
              I build full-stack applications, explore AI-powered solutions, and enjoy turning ideas into real products.
            </motion.p>

            {/* Metadata Tags */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#a0a0a0] font-mono"
            >
              <span className="inline-flex items-center gap-1.5 text-cyan-400">
                <FaLocationDot className="text-cyan-400" />
                Colombo, Sri Lanka
              </span>
              <span className="text-slate-700">•</span>
              <span>Computer Science Undergraduate @ Westminster</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md hover:bg-cyan-300 transition-all active:scale-95"
              >
                <span>View My Work</span>
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#f0f0f0] hover:bg-white/[0.08] hover:border-white/20 transition-all active:scale-95"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm font-medium text-[#a0a0a0] hover:text-[#f0f0f0] hover:border-white/20 transition-all active:scale-95"
              >
                <HiOutlineDocumentText className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </motion.div>

          </div>

          {/* Right Hero Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[320px] sm:max-w-[360px]"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212] p-3 shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#161616]">
                  <img
                    src={profile}
                    alt="Emika Sandina"
                    className="h-full w-full object-cover object-center transition-all duration-500 ease-out hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                <div className="mt-3 flex items-center justify-between px-2 py-1">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#f0f0f0]">Emika Sandina</span>
                    <span className="text-[11px] text-[#a0a0a0] font-mono">Full-Stack & ML</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                    <span>Active Engineer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
