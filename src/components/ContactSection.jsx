import { useState, useCallback, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaCopy, FaCheck } from "react-icons/fa6";
import { HiPaperAirplane, HiOutlineCheckCircle, HiOutlineExclamationTriangle } from "react-icons/hi2";
import SectionReveal from "./SectionReveal";

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);
  const [copied, setCopied] = useState(false);

  const email = "emikasandina264@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closePopup = useCallback(() => setPopup(null), []);

  useEffect(() => {
    if (!popup) return;
    const onKey = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [popup, closePopup]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim();
    if (!accessKey) {
      setPopup({
        variant: "error",
        title: "Could not send",
        message: "Missing Web3Forms access key in environment configuration.",
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      let data;
      try {
        data = await response.json();
      } catch {
        setPopup({
          variant: "error",
          title: "Could not send",
          message: "The server returned an unexpected response. Please try again later.",
        });
        return;
      }

      if (data.success) {
        event.target.reset();
        setPopup({
          variant: "success",
          title: "Message Delivered",
          message: "Thank you for getting in touch. I have received your message and will respond shortly.",
        });
      } else {
        setPopup({
          variant: "error",
          title: "Could not send",
          message:
            typeof data.message === "string" && data.message.trim()
              ? data.message
              : "Something went wrong. Please try again later.",
        });
      }
    } catch {
      setPopup({
        variant: "error",
        title: "Connection Error",
        message: "Unable to reach the server. Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[450px] w-[600px] max-w-full rounded-full bg-cyan-500/[0.04] blur-[120px] -z-10" />

      <div className="section-shell">
        <SectionReveal>
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-heading">Let's Build Something Great.</h2>
          <p className="section-subtext">
            I'm always open to discussing interesting projects, opportunities, and ideas.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info (5 cols) */}
          <SectionReveal className="lg:col-span-5 space-y-6" delay={0.1}>
            <div className="editorial-card p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-[#f0f0f0]">
                  Contact Details
                </h3>
                <p className="mt-1 text-sm text-[#a0a0a0]">
                  Reach out directly via email or connect across my developer networks.
                </p>
              </div>

              {/* Email item with copy button */}
              <div className="rounded-xl border border-white/[0.08] bg-[#161616] p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex-shrink-0">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#a0a0a0] block">Email</span>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-medium text-[#f0f0f0] hover:text-cyan-300 transition-colors truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[#a0a0a0] hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
                >
                  {copied ? <FaCheck className="h-3.5 w-3.5 text-emerald-400" /> : <FaCopy className="h-3.5 w-3.5" />}
                </button>
              </div>

              {/* Location item */}
              <div className="rounded-xl border border-white/[0.08] bg-[#161616] p-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex-shrink-0">
                  <FaLocationDot className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#a0a0a0] block">Location</span>
                  <span className="text-sm font-medium text-[#f0f0f0]">Colombo, Sri Lanka</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#a0a0a0] block mb-3">
                  Profiles
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/emika-sandina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-[#f0f0f0] hover:bg-white/[0.08] hover:border-white/20 transition-all active:scale-95"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/emika-sandina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-[#f0f0f0] hover:bg-white/[0.08] hover:border-white/20 transition-all active:scale-95"
                  >
                    <FaLinkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Contact Form (7 cols) */}
          <SectionReveal className="lg:col-span-7" delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="editorial-card p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#f0f0f0] mb-2">
                    Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-[#f0f0f0] placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:bg-[#121212]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#f0f0f0] mb-2">
                    Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-[#f0f0f0] placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:bg-[#121212]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[#f0f0f0] mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project inquiry / Opportunity"
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-[#f0f0f0] placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:bg-[#121212]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#f0f0f0] mb-2">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-[#f0f0f0] placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:bg-[#121212]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-md hover:bg-cyan-300 transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <HiPaperAirplane className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </SectionReveal>

        </div>
      </div>

      {/* Feedback Modal Dialog */}
      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={closePopup}
          role="presentation"
        >
          <div
            className="editorial-card max-w-md w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center gap-3">
              {popup.variant === "success" ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <HiOutlineCheckCircle className="h-6 w-6" />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400 border border-red-500/30">
                  <HiOutlineExclamationTriangle className="h-6 w-6" />
                </div>
              )}
              <h4 className="text-lg font-bold font-display text-[#f0f0f0]">
                {popup.title}
              </h4>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">
              {popup.message}
            </p>

            <button
              type="button"
              onClick={closePopup}
              className="mt-6 w-full rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 py-2.5 text-xs font-semibold text-white transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;
