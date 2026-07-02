import { SectionHeading } from "./About";
import { Reveal } from "./Reveal";

const contacts = [
  { icon: "✉️", label: "\nsohindoshi@gmail.com", href: "mailto:sohindoshi@gmail.com" },
  {
    icon: "🔗",
    label: "\nlinkedin.com/in/sohin-doshi",
    href: "https://linkedin.com/in/sohin-doshi",
  },
  {
    icon: "💻",
    label: "github.com/Sohindoshi1009",
    href: "https://github.com/Sohindoshi1009",
  },
  { icon: "📞", label: "\n+91 9987555776", href: "tel:+919987555776" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-paper px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Let's connect" title="Get in touch" />
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal className="text-[16px] leading-relaxed text-ink-mid">
            <p>
              I enjoy connecting with engineers, researchers, and teams working on
              interesting problems in NVH, acoustics, or AI applied to
              engineering. You can find my published work and open-source
              projects through the links on this page.
            </p>
            <p className="mt-4">
              For anything else, my contact details are listed below.
            </p>
          </Reveal>
          <div className="flex flex-col gap-3">
            {contacts.map((c, i) => (
              <Reveal key={c.label} index={i}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 rounded-sm border border-rule bg-paper-warm px-4 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                >
                  <span className="mt-0.5 text-lg leading-none">{c.icon}</span>
                  <span className="whitespace-pre-line">{c.label}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
