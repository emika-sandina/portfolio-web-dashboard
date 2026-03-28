import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import SectionReveal from "./SectionReveal";

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);

  const closePopup = useCallback(() => setPopup(null), []);

  useEffect(() => {
    if (!popup) return;
    const onKey = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [popup, closePopup]);

  useEffect(() => {
    if (!popup) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [popup]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim();
    if (!accessKey) {
      setPopup({
        variant: "error",
        title: "Could not send",
        message:
          "The contact form is missing its access key. Add VITE_WEB3FORMS_KEY to src/.env and restart the dev server.",
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
          title: "Successfully sent",
          message:
            "Thank you for your message. I will get back to you as soon as I can.",
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
        title: "Could not send",
        message:
          "We could not reach the server. Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-brandLightGrey/30 bg-brandWhite">
      <SectionReveal className="section-shell">
        <h3 className="section-title">Contact Me</h3>
        <p className="section-subtitle">
          Send a message or connect via email, phone, and professional profiles.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <form
            className="frost-card rounded-3xl p-7 md:p-9"
            onSubmit={onSubmit}
          >
            <div className="grid gap-5">
              <label className="text-sm font-medium text-brandBlack">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-brandLightGrey/50 bg-page px-4 py-3 text-sm text-brandBlack outline-none transition focus:border-brandLightBlue"
                />
              </label>
              <label className="text-sm font-medium text-brandBlack">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-xl border border-brandLightGrey/50 bg-page px-4 py-3 text-sm text-brandBlack outline-none transition focus:border-brandLightBlue"
                />
              </label>
              <label className="text-sm font-medium text-brandBlack">
                Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Your message"
                  className="mt-2 w-full resize-none rounded-xl border border-brandLightGrey/50 bg-page px-4 py-3 text-sm text-brandBlack outline-none transition focus:border-brandLightBlue"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-brandDarkBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandLightBlue disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending…" : "Submit"}
              </button>
            </div>
          </form>

          <div className="frost-card rounded-3xl p-7 md:p-9">
            <h4 className="text-xl font-semibold text-brandBlack">Contact Details</h4>
            <div className="mt-7 space-y-5 text-brandDarkGrey">
              <div className="flex items-start gap-3">
                <span className="mt-1 rounded-full bg-brandLightBlue/15 p-2 text-brandDarkBlue">
                  <FaLocationDot />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brandBlack">Location</p>
                  <p className="text-sm">Godagama, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 rounded-full bg-brandLightBlue/15 p-2 text-brandDarkBlue">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brandBlack">Email</p>
                  <p className="text-sm">emikasandina264@gmail.com</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm font-semibold text-brandBlack">Profiles</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/emika-sandina-243a98336/"
                    className="inline-flex items-center gap-2 rounded-full border border-brandDarkBlue/30 px-4 py-2 text-sm font-medium text-brandDarkBlue transition hover:bg-brandDarkBlue hover:text-white"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/emika-sandina"
                    className="inline-flex items-center gap-2 rounded-full border border-brandDarkBlue/30 px-4 py-2 text-sm font-medium text-brandDarkBlue transition hover:bg-brandDarkBlue hover:text-white"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {popup ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closePopup}
          role="presentation"
        >
          <div
            className="frost-card w-full max-w-md rounded-2xl p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            aria-describedby="contact-dialog-desc"
          >
            <h4
              id="contact-dialog-title"
              className={`text-xl font-bold ${
                popup.variant === "success" ? "text-brandDarkBlue" : "text-red-600 dark:text-red-400"
              }`}
            >
              {popup.title}
            </h4>
            <p
              id="contact-dialog-desc"
              className="mt-4 text-base leading-relaxed text-brandDarkGrey"
            >
              {popup.message}
            </p>
            <button
              type="button"
              onClick={closePopup}
              className="mt-8 w-full rounded-full bg-brandDarkBlue py-3 text-sm font-semibold text-white transition hover:bg-brandLightBlue"
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default ContactSection;
