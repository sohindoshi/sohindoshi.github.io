import { Reveal } from "./Reveal";

const chips = [
  { label: "Location", val: "Pune, Maharashtra, India" },
  { label: "Current Role", val: "Senior Manager – NVH, Tata Motors" },
  { label: "Domain Focus", val: "NVH · Acoustics · AI/ML · Test Automation" },
  { label: "GitHub", val: "github.com/Sohindoshi1009" },
  { label: "PROFILE", val: "Senior NVH · AI & ML for Engineering · Acoustics Engineer" },
];

export function About() {
  return (
    <section id="about" className="bg-paper px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Background" title="Who I am" />
        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <Reveal className="space-y-4 text-[16px] leading-[1.8] text-ink-mid">
            <p>
              I am a Senior Manager of NVH at Tata Motors, Pune, with 12 years
              of hands-on experience across commercial vehicles, electric
              vehicle platforms, buses, and defence applications. My work sits
              at the intersection of precision acoustic measurement and
              engineering problem-solving — I've built factory NVH test labs
              from scratch, resolved complex driveline noise issues at
              root-cause level, and authored three SAE international conference
              papers on bus and EV NVH.
            </p>
            <p>
              Alongside my core NVH career, I am completing an M.Tech in AI and
              Machine Learning at BITS Pilani. This dual expertise allows me to
              bring data-driven tools — automated testing pipelines, signal
              processing in Python and MATLAB, and RAG-based knowledge systems
              — to problems that previously relied only on intuition and
              experience.
            </p>
            <p>
              I hold two Indian patents in electric vehicle NVH, both arising
              from front-line problem-solving on real production programmes at
              Tata Motors.
            </p>
          </Reveal>
          <div className="flex flex-col gap-3">
            {chips.map((c, i) => (
              <Reveal
                key={c.label}
                index={i}
                className="rounded-r-sm border-l-[3px] border-accent bg-paper-warm px-4 py-3"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-ink-muted">
                  {c.label}
                </div>
                <div className="mt-0.5 text-sm font-medium text-ink">
                  {c.val}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
        {eyebrow}
      </p>
      <h2 className="mb-10 border-b border-rule pb-4 font-display text-3xl leading-tight tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
