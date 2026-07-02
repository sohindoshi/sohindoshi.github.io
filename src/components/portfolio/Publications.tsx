import { SectionHeading } from "./About";
import { Reveal } from "./Reveal";

const pubs = [
  {
    year: "SAE TECHNICAL PAPER · 2025",
    title: "Electric Bus NVH Challenges and Refinement Using Innovative Approach",
    venue: "SAE World Congress 2025 — Detroit, USA",
    authors:
      "Sohin Doshi, Dhanaji Kalsule, Pradeep Sawangikar, Vineeth Suresh, Manish Sharma · Tata Motors Ltd.",
    doi: "10.4271/2025-01-0080",
    url: "https://doi.org/10.4271/2025-01-0080",
  },
  {
    year: "SAE TECHNICAL PAPER · 2021",
    title: "Bus NVH Refinement: A Journey towards Comfortable Future",
    venue: "Symposium on International Automotive Technology (SIAT) — Pune, India",
    authors:
      "Sohin Doshi, Girish Taware, Dhanaji Kalsule, Vilas Bijwe, Sudhakara Naidu · Tata Motors Ltd.",
    doi: "10.4271/2021-26-0272",
    url: "https://doi.org/10.4271/2021-26-0272",
  },
  {
    year: "SAE TECHNICAL PAPER · 2017",
    title:
      "Reduction of Driveline Boom Noise and Vibration of 40 Seat Bus through Structural Optimization",
    venue:
      "International Conference on Advances in Design, Materials, Manufacturing and Surface Engineering for Mobility",
    authors:
      "Jos Frank, Sohin Doshi, Manchi Rao, Prasath Raghavendran · Mahindra & Mahindra Ltd.",
    doi: "10.4271/2017-28-1926",
    url: "https://doi.org/10.4271/2017-28-1926",
  },
];

export function Publications() {
  return (
    <section id="publications" className="bg-paper-card px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Research" title="Published papers" />
        <div className="flex flex-col gap-4">
          {pubs.map((p, i) => (
            <Reveal
              key={p.doi}
              index={i}
              className="rounded-sm border border-rule border-l-4 border-l-accent bg-paper-warm px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-1.5 font-mono text-[11px] tracking-[0.08em] text-ink-muted">
                {p.year}
              </div>
              <h3 className="mb-1 text-[15px] font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <div className="mb-1.5 text-[13px] font-medium text-accent">
                {p.venue}
              </div>
              <div className="mb-2.5 text-[13px] text-ink-soft">{p.authors}</div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[2px] border border-accent px-2.5 py-1 font-mono text-[12px] text-accent transition-colors hover:bg-accent hover:text-white"
              >
                ↗ DOI: {p.doi}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
