import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#achievements", label: "Achievements" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-rule bg-paper/90 px-6 backdrop-blur-md md:px-8"
    >
      <a href="#" className="font-display text-lg tracking-tight text-ink">
        Sohin S. Doshi
      </a>
      <ul className="hidden gap-6 lg:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
