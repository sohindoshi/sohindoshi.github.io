import { motion } from "framer-motion";
import { SectionHeading } from "./About";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: "🔊",
    title: "NVH Testing & Diagnostics",
    body: "Factory acoustic SOPs, modal testing, ODS analysis, order tracking, TPA, and root-cause NVH resolution across commercial vehicles and EV platforms.",
    tags: ["LMS Test.Lab", "B&K Pulse", "HEAD Acoustics", "OROS"],
    gold: false,
  },
  {
    icon: "⚡",
    title: "Electric Vehicle NVH",
    body: "Two Indian patents in EV driveline whine and backlash thud noise. Deep experience with high-frequency tonal noise unique to electric drivetrains — gear macro/micro geometry, torsional resonance decoupling.",
    tags: ["EV Driveline", "Whine Analysis", "Torque Control", "Patent Holder"],
    gold: false,
  },
  {
    icon: "🤖",
    title: "AI / Machine Learning",
    body: "Pursuing M.Tech AI/ML at BITS Pilani. Built a full-stack NVH RAG system (FastAPI + React) and a stock data pipeline. Applying ML to predictive diagnostics and NVH knowledge retrieval.",
    tags: ["Python", "RAG", "FastAPI", "Signal Processing"],
    gold: true,
  },
  {
    icon: "🏭",
    title: "Factory Lab & Test Automation",
    body: "Commissioned a full factory NVH test laboratory from scratch. Built Python automation tools for vibration dose value calculation and reporting, significantly reducing manual analysis time.",
    tags: ["Lab Setup", "Test SOPs", "ISO 3744", "Automation"],
    gold: false,
  },
  {
    icon: "🔇",
    title: "Sound Quality Engineering",
    body: "Psychoacoustic metrics — loudness, sharpness, roughness, tonality. Translating subjective perception into objective engineering targets for interior cabin refinement.",
    tags: ["Psychoacoustics", "Sound Quality", "Cabin Refinement", "Benchmarking"],
    gold: false,
  },
  {
    icon: "📐",
    title: "Structural & CAE NVH",
    body: "Engine mount isolation modelling, Space Frame EV bus CAE framework, compressor supplier qualification via acoustic standards. CAE validation against test measurements.",
    tags: ["Modal Analysis", "Engine Mounts", "CAE Framework", "Supplier QA"],
    gold: true,
  },
];

const domainSkills = [
  { name: "Electric Vehicle NVH", level: "Expert", pct: 96 },
  { name: "Bus & Commercial Vehicle NVH", level: "Expert", pct: 94 },
  { name: "Sound Quality & Psychoacoustics", level: "Advanced", pct: 85 },
  { name: "Defence NVH Applications", level: "Advanced", pct: 80 },
  { name: "CAE–Test Correlation", level: "Advanced", pct: 82 },
];

const proSkills = [
  { name: "NVH Program Delivery", level: "Expert", pct: 94 },
  { name: "Cross-functional Collaboration", level: "Expert", pct: 90 },
  { name: "Technical Stakeholder Communication", level: "Advanced", pct: 86 },
  { name: "Patent Filing & IP Strategy", level: "Advanced", pct: 80 },
  { name: "Technical Publications (SAE)", level: "Advanced", pct: 78 },
];

const certs = [
  {
    icon: "🎓",
    title: "M.Tech — AI & ML",
    sub: "BITS Pilani · In progress",
    color: "border-l-gold",
  },
  {
    icon: "🏛️",
    title: "M.Tech — Machine Design",
    sub: "IIT Madras · CGPA 8.63",
    color: "border-l-accent",
  },
  {
    icon: "🔧",
    title: "SAE International Member",
    sub: "3× Published Technical Author",
    color: "border-l-ink-muted",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-paper-card px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Core Competencies" title="Areas of expertise" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              index={i}
              className="group relative overflow-hidden rounded-sm border border-rule bg-paper-warm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 ${c.gold ? "bg-gold" : "bg-accent"}`}
              />
              <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110">
                {c.icon}
              </div>
              <h3 className="mb-2 font-sans text-base font-semibold tracking-normal text-ink">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{c.body}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-[2px] border border-rule bg-paper-card px-2 py-0.5 font-mono text-[11px] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="mb-8 border-b border-rule pb-3 font-display text-2xl tracking-tight text-ink">
              Skills &amp; depth
            </h3>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            <SkillColumn title="Domain knowledge" items={domainSkills} />
            <SkillColumn title="Professional & leadership" items={proSkills} gold />
          </div>
        </div>

        <div className="mt-12">
          <Reveal>
            <div className="mb-4 text-sm font-semibold tracking-wide text-ink">
              Certifications &amp; memberships
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((c, i) => (
              <Reveal
                key={c.title}
                index={i}
                className={`flex items-center gap-3 rounded-sm border border-l-4 border-rule bg-paper-warm px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${c.color}`}
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-[13px] font-semibold text-ink">
                    {c.title}
                  </div>
                  <div className="text-[12px] text-ink-muted">{c.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function SkillColumn({
  title,
  items,
  gold = false,
}: {
  title: string;
  items: { name: string; level: string; pct: number }[];
  gold?: boolean;
}) {
  return (
    <Reveal>
      <div className="mb-4 text-sm font-semibold tracking-wide text-ink">
        {title}
      </div>
      {items.map((s) => (
        <div key={s.name} className="mb-3.5">
          <div className="mb-1.5 flex justify-between">
            <span className="text-[13px] text-ink-mid">{s.name}</span>
            <span className="font-mono text-[12px] text-ink-muted">
              {s.level}
            </span>
          </div>
          <div className="h-[3px] overflow-hidden rounded bg-rule">
            <motion.div
              className={`h-full rounded ${gold ? "bg-gold" : "bg-accent"}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${s.pct}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </Reveal>
  );
}
