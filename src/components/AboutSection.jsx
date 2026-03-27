import SectionReveal from "./SectionReveal";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-brandLightGrey/30 bg-brandWhite"
    >
      <SectionReveal className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="frost-card rounded-3xl p-5">
            <div className="flex h-[380px] items-center justify-center rounded-2xl border-2 border-dashed border-brandLightGrey/70 bg-brandDarkGrey/5 text-center md:h-[420px]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brandDarkGrey">
                  Profile Picture
                </p>
                <p className="mt-2 text-base font-medium text-brandBlack">
                  Add your image here
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="section-title">About Me</h3>
            <p className="mt-6 text-base leading-relaxed text-brandDarkGrey md:text-lg">
              I build practical, user-focused software by combining responsive
              frontend development with reliable backend systems and real-world
              machine learning.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default AboutSection;
