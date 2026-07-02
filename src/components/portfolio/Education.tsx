import { SectionHeading } from "./About";
import { Reveal } from "./Reveal";

const edu = [
  {
    year: "Current",
    degree: "M.Tech — Artificial Intelligence & Machine Learning",
    inst: "BITS Pilani (Birla Institute of Technology and Science)",
    detail:
      "Pursued alongside active industry career. Focus on ML for engineering applications — signal classification, anomaly detection, and RAG systems for domain-specific knowledge retrieval.",
  },
  {
    year: "2012",
    degree: "M.Tech — Machine Design · CGPA 8.63",
    inst: "IIT Madras (Indian Institute of Technology Madras)",
    detail:
      "Elite postgraduate engineering programme. Strong foundation in structural dynamics, vibration theory, finite element methods, and mechanical systems design.",
  },
];

export function Education() {
  return (
    <section id="education" className="bg-paper-card px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Academic Background" title="Education" />
        <div className="flex flex-col gap-4">
          {edu.map((e, i) => (
            <Reveal
              key={e.degree}
              index={i}
              className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-sm border border-rule bg-paper-warm p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <div className="font-mono text-xs tracking-wide text-ink-muted [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180">
                {e.year}
              </div>
              <div>
                <div className="text-[15px] font-semibold text-ink">{e.degree}</div>
                <div className="mt-0.5 text-sm font-medium text-accent">
                  {e.inst}
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                  {e.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
