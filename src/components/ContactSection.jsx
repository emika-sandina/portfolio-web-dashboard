import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import SectionReveal from "./SectionReveal";

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5">
              <label className="text-sm font-medium text-brandBlack">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-brandLightGrey/50 bg-page px-4 py-3 text-sm text-brandBlack outline-none transition focus:border-brandLightBlue"
                />
              </label>
              <label className="text-sm font-medium text-brandBlack">
                Email
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-xl border border-brandLightGrey/50 bg-page px-4 py-3 text-sm text-brandBlack outline-none transition focus:border-brandLightBlue"
                />
              </label>
              <label className="text-sm font-medium text-brandBlack">
                Message
                <textarea
                  rows="5"
                  placeholder="Your message"
                  className="mt-2 w-full resize-none rounded-xl border border-brandLightGrey/50 bg-page px-4 py-3 text-sm text-brandBlack outline-none transition focus:border-brandLightBlue"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-brandDarkBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brandLightBlue"
              >
                Submit
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
                  <FaPhone />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brandBlack">Phone</p>
                  <p className="text-sm">075-463-8288</p>
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
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-brandDarkBlue/30 px-4 py-2 text-sm font-medium text-brandDarkBlue transition hover:bg-brandDarkBlue hover:text-white"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a
                    href="#"
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
    </section>
  );
}

export default ContactSection;
