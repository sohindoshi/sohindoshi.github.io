import { SectionHeading } from "./About";
import { Reveal } from "./Reveal";

const projects = [
  {
    icon: "🧠",
    title: "NVH RAG System — Backend",
    desc: "A Retrieval-Augmented Generation backend that allows engineers to query NVH knowledge bases using natural language. Built with FastAPI, enables semantic search over acoustic and vibration engineering documents.",
    stack: ["FastAPI", "Python", "RAG", "LLM", "NVH Domain"],
    href: "https://github.com/Sohindoshi1009/nvh-rag-system",
    linkLabel: "⭐ Backend repo",
  },
  {
    icon: "💻",
    title: "NVH RAG System — Frontend",
    desc: "React-based chat interface for the NVH RAG system. Engineers can ask questions about noise, vibration, and harshness topics and get context-aware answers drawn from curated engineering documents.",
    stack: ["React", "JavaScript", "Chat UI", "API Integration"],
    href: "https://github.com/Sohindoshi1009/nvh-rag-frontend",
    linkLabel: "⭐ Frontend repo",
  },
  {
    icon: "📈",
    title: "Stock Data Collector",
    desc: "A Python pipeline for collecting, processing, and storing financial market data. Demonstrates application of data engineering and automation techniques outside the NVH domain — signals breadth of programming ability.",
    stack: ["Python", "Data Pipeline", "Finance", "Automation"],
    href: "https://github.com/Sohindoshi1009/stock_data_collector",
    linkLabel: "⭐ View repo",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-paper px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Open Source" title="GitHub projects" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              index={i}
              className="flex flex-col gap-3 rounded-sm border border-rule bg-paper-warm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-2xl">{p.icon}</div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[2px] border border-rule px-2 py-1 font-mono text-[11px] text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {p.linkLabel}
                </a>
              </div>
              <h3 className="text-base font-semibold text-ink">{p.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
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
      </div>
    </section>
  );
}
