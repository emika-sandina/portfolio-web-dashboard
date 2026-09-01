import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070707] py-12">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#a0a0a0] font-mono">
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-[#f0f0f0] font-semibold font-display text-sm">
              Emika Sandina
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>© 2026 Emika Sandina. All rights reserved.</span>
          </div>

          {/* Built with */}
          <div className="text-center text-[#a0a0a0]">
            <span>Built with React & Tailwind CSS</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/emika-sandina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-[#a0a0a0] hover:text-white transition-colors"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/emika-sandina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#a0a0a0] hover:text-white transition-colors"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[#a0a0a0] hover:text-white hover:bg-white/10 transition-colors"
            >
              <HiArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
