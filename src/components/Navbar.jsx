import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";
import cvPdf from "../assets/Emika Sandina CV.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "experience", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-5 transition-all duration-300 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#121212]/90 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/60"
            : "bg-[#121212]/50 border border-white/[0.06] backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#f0f0f0] hover:text-cyan-400 transition-colors"
        >
          
          <span className="font-display font-medium text-[#f0f0f0]">
            Emika Sandina
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.06]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#f0f0f0] font-semibold"
                    : "text-[#a0a0a0] hover:text-[#f0f0f0] hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Socials & Resume CTA */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://github.com/emika-sandina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#a0a0a0] hover:text-white hover:bg-white/10 transition-colors"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/emika-sandina-243a98336/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#a0a0a0] hover:text-white hover:bg-white/10 transition-colors"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/20 hover:shadow-md transition-all active:scale-95"
          >
            <FiDownload className="h-3.5 w-3.5" />
            <span>CV</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 hover:bg-white/10 md:hidden transition-colors"
          >
            {mobileMenuOpen ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 rounded-2xl border border-white/10 bg-[#121212]/95 p-5 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-cyan-500/15 text-cyan-300 font-semibold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/emika-sandina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emika-sandina-243a98336/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  <FiDownload className="h-3.5 w-3.5" />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
