import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "Dengue Guard",
    stack: "React JS, Express JS, Supabase, XGBoost",
    description:
      "Dengue breeding site, dengue case reporting and prediction platform.",
  },
  {
    title: "Loan Approval Prediction System",
    stack: "Pandas, Sci-kit learn, KNN, Linear Regression",
    description:
      "Predictive models to assess credit risk and automate loan eligibility.",
  },
  {
    title: "Dengue Guard Landing Page",
    stack: "ReactJS, TailwindCSS, Vite",
    description:
      "Developed a landing page for the Dengue Guard project on behalf of Marketing Purposes.",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-brandLightGrey/30 bg-brandWhite">
      <SectionReveal className="section-shell">
        <h3 className="section-title">Projects</h3>
        <p className="section-subtitle">
          Selected academic and practical software projects.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal
              key={project.title}
              className="frost-card rounded-3xl p-7"
              delay={index * 0.05}
              y={24}
            >
              <h4 className="text-xl font-bold text-brandBlack">{project.title}</h4>
              <p className="mt-2 text-sm font-semibold text-brandDarkBlue">
                {project.stack}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brandDarkGrey md:text-base">
                {project.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default ProjectsSection;
