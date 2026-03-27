import SectionReveal from "./SectionReveal";
import profile from "../assets/lin.png";
function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-brandLightGrey/30 bg-brandWhite"
    >
      <SectionReveal className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="frost-card rounded-3xl p-5">
            <img src={profile} alt="Emika Sandina" className="w-full h-full object-cover rounded-2xl" />
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
