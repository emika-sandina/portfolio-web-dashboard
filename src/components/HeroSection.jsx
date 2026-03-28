import cvPdf from "../assets/w2120242_Emika_CV.pdf";
import profile from "../assets/dp.png";
import SectionReveal from "./SectionReveal";

function HeroSection() {
  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <section
      id="home"
      className="border-b border-brandLightGrey/30 bg-brandWhite"
    >
      <header className="sticky top-0 z-40 border-b border-brandLightGrey/25 bg-brandWhite/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-xl font-bold text-brandBlack">Emika Sandina</p>
            <p className="text-xs tracking-wide text-brandDarkGrey">
              Computer Science Undergraduate
            </p>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-brandDarkGrey transition hover:text-brandDarkBlue"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <SectionReveal className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-brandBlack md:text-6xl">
              Emika Sandina
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-brandDarkBlue md:text-3xl">
              Computer Science Undergraduate
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brandDarkGrey md:text-lg">
              I am a Computer Science undergraduate driven by a passion for
              building practical, user-centric software. I specialize in
              full-stack development—crafting responsive React interfaces and
              robust backend APIs —while leveraging machine learning to solve
              complex, real-world data challenges.
            </p>
            <div className="mt-6">
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-brandDarkBlue/30 bg-brandDarkBlue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brandDarkBlue/90"
              >
                View CV
              </a>
            </div>
          </div>

          <div className="frost-card rounded-3xl p-5 md:max-w-none">
            <img
              src={profile}
              alt="Emika Sandina"
              className="aspect-[4/5] w-full rounded-2xl object-cover md:aspect-[3/4]"
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default HeroSection;
