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
    <section id="home" className="border-b border-brandLightGrey/30 bg-brandWhite">
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
              I build practical, user-focused software by combining responsive
              frontend development with reliable backend systems and real-world
              machine learning.
            </p>
          </div>

          <div className="frost-card rounded-3xl border-brandLightBlue/40 bg-gradient-to-br from-brandLightBlue/15 to-brandDarkBlue/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandDarkBlue">
              Quick Intro
            </p>
            <p className="mt-4 text-lg font-semibold text-brandBlack">
              Full-Stack Web Development | AI & Machine Learning
            </p>
            <p className="mt-8 text-sm leading-relaxed text-brandDarkGrey">
              Open to internships and collaborative
              software projects.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-brandDarkBlue/30 px-4 py-2 text-xs font-semibold text-brandDarkBlue transition hover:bg-brandDarkBlue hover:text-brandWhite"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default HeroSection;
