import SectionReveal from "./SectionReveal";

const educationItems = [
  {
    institute: "University of Westminister",
    period: "2024-Current",
    qualification: "BSc Computer Science",
    details:
      "On-going",
  },
  {
    institute: "Informatics Institute Of Technology",
    period: "2023-2024",
    qualification: "Foundation Certificate of Higher Education",
    details: "Completed",
  },
  {
    institute: "Vidura College - Colombo",
    period: "2017-2022",
    qualification: "G.C.E. Ordinary Level Examination",
    details: "Completed",
  },
  {
    institute: "Highlands College - Maharagama",
    period: "2012-2016",
    qualification: "Primary Education",
    details: "Completed",
  }
];

function EducationSection() {
  return (
    <section id="education" className="border-t border-brandLightGrey/30 bg-brandWhite">
      <SectionReveal className="section-shell">
        <h3 className="section-title">Education</h3>
        <p className="section-subtitle">
          Academic background and key learning milestones.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {educationItems.map((item) => (
            <SectionReveal
              key={`${item.institute}-${item.period}`}
              className="frost-card rounded-3xl border-l-4 border-brandLightBlue p-7"
              y={22}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-brandDarkBlue">
                {item.period}
              </p>
              <h4 className="mt-3 text-xl font-bold text-brandBlack">
                {item.institute}
              </h4>
              <p className="mt-2 text-base font-semibold text-brandDarkGrey">
                {item.qualification}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brandDarkGrey md:text-base">
                {item.details}
              </p>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default EducationSection;
