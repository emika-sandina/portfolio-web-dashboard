import SectionReveal from "./SectionReveal";

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Java", "Python"],
  },

  {
    title: "Front-End Development",
    items: ["React JS", "HTML", "CSS", "Figma"],
  },
  {
    title: "Back-End & Databases",
    items: ["Express JS", "Node.js", "MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "Machine Learning & Data Science",
    items: [
      "Scikit-Learn", 
      "Pandas", 
      "Predictive Modeling", 
      "Data Preprocessing", 
      "Classification & Regression", 
    ],
  },
  {
    title: "Tools",
    items: ["GitHub", "Trello"],
  },
  {
    title: "Soft Skills",
    items: [
      "Leadership",
      "Team Work",
      "Adaptability",
      "Problem Solving",
      "Time Management",
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="border-t border-brandLightGrey/30 bg-brandWhite">
      <SectionReveal className="section-shell">
        <h3 className="section-title">Skills</h3>
        <p className="section-subtitle">
          Technical and interpersonal strengths grouped for quick overview.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SectionReveal
              key={group.title}
              className="frost-card rounded-3xl p-7"
              delay={index * 0.04}
              y={20}
            >
              <h4 className="text-lg font-bold text-brandBlack">{group.title}</h4>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brandDarkBlue/20 bg-brandLightBlue/10 px-4 py-2 text-sm font-medium text-brandDarkBlue"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default SkillsSection;
