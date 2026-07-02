import { motion } from "framer-motion";
import portrait from "@/assets/sohin-portrait-clean.png.asset.json";

const stats = [
  { num: "12", label: "Years in NVH" },
  { num: "2", label: "Indian Patents" },
  { num: "3", label: "SAE Papers" },
  { num: "IIT + BITS", label: "M.Tech × 2" },
];

export function Hero() {
  return (
    <>
      <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2 md:px-8 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Senior Manager · NVH &amp; AI/ML Engineer
          </p>
          <h1 className="mb-4 font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[68px]">
            Sohin
            <br />
            <em className="italic text-accent">S. Doshi</em>
          </h1>
          <p className="mb-8 max-w-md text-[17px] font-light leading-relaxed text-ink-mid">
            12 years engineering the silence inside vehicles — now applying
            machine intelligence to predict, diagnose, and eliminate noise and
            vibration at scale.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-block rounded-sm bg-accent px-6 py-2.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-ink"
            >
              Get in touch
            </a>
            <a
              href="#publications"
              className="inline-block rounded-sm border border-ink-mid bg-transparent px-6 py-2.5 text-[13px] font-medium tracking-wide text-ink-mid transition-colors hover:border-accent hover:text-accent"
            >
              View publications
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[360px] w-[280px] overflow-hidden rounded-sm border border-rule bg-paper-warm shadow-sm"
          >
            <img
              src={portrait.url}
              alt="Sohin S. Doshi — Senior Manager, NVH & AI/ML Engineer"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>
        </motion.div>

      </section>

      <div className="bg-accent px-6 py-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 text-center md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="font-display text-3xl leading-none text-white">
                {s.num}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
