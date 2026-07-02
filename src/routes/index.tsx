import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Achievements } from "@/components/portfolio/Achievements";
import { Publications } from "@/components/portfolio/Publications";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Achievements />
        <Publications />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
