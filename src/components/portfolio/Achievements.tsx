import { SectionHeading } from "./About";
import { Reveal } from "./Reveal";

const items = [
  {
    title: "Indian Patent — EV Driveline Whine Suppression",
    desc: "Invented and patented a novel approach to eliminating high-frequency tonal whine in electric vehicle drivetrains — a pervasive NVH challenge unique to EVs where there is no combustion noise to mask the problem.",
    badge: "Patent Holder",
  },
  {
    title: "Indian Patent — EV Backlash Thud Noise via Torque Control",
    desc: "Developed a torque control strategy that prevents the characteristic \"thud\" during EV driveline tip-in/tip-out events. Stood ground against opposing engineering opinion to implement the correct — and patented — solution.",
    badge: "Patent Holder",
  },
  {
    title: "Engine mount isolation model",
    desc: "Engine Mount Isolation — Mathematical Modelling\nDeveloped a first-principles mathematical model for engine mount isolation performance, enabling analytical prediction of powertrain NVH isolation before physical testing — later used as a teaching tool across the team.",
    badge: "Core Technical Experties",
  },
  {
    title: "Bus NVH — 6–7 dB(A) Cabin Noise Reduction",
    desc: "Led the NVH refinement of an M2-category 40-seat bus, achieving 6–7 dB(A) cabin noise improvement, 20–25% articulation index improvement, and ~70% vibration reduction across all load conditions — documented in a 2021 SAE paper.",
    badge: "SAE Published Result",
  },
  {
    title: "Electric Bus — 8–10 dB(A) NVH Improvement",
    desc: "Resolved rear axle whine and torsional resonance coupling on a battery electric bus using TPA, ODS, gear macro/micro geometry optimisation, and propeller shaft stiffness tuning — reducing in-cabin noise by 8–10 dB(A). Documented in SAE 2025.",
    badge: "SAE Published Result",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="bg-paper px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Key Highlights" title="Notable achievements" />
        <div className="flex flex-col gap-5">
          {items.map((a, i) => (
            <Reveal
              key={a.title}
              index={i}
              className="grid grid-cols-[48px_1fr] items-start gap-6 rounded-sm border border-rule bg-paper-warm p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <div className="text-right font-display text-3xl italic leading-none text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="mb-1 font-sans text-[15px] font-semibold tracking-normal text-ink">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{a.desc}</p>
                <span className="mt-2 inline-block rounded-[2px] border border-gold/60 bg-gold-light px-2 py-0.5 font-mono text-[11px] text-gold">
                  {a.badge}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
