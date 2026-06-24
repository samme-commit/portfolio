import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./About.css";

export function About() {
  return (
    <section className="section-block about-section" id="about">
      <SectionHeader
        eyebrow="About"
        title="Focused on building projects that feel real."
        description="I care about creating web projects that look polished, have clear structure and feel closer to real products than small demos."
      />

      <div className="about-grid">
        <div className="about-card">
          <h3>Who I am</h3>
          <p>
            I'm Samuel, a developer from Sweden learning modern frontend
            development through serious portfolio projects built with React,
            TypeScript and Vite.
          </p>
        </div>

        <div className="about-card">
          <h3>What I build</h3>
          <p>
            I like building clean UI concepts, landing pages, forms, dashboards
            and web experiences with strong visual direction and responsive
            layouts.
          </p>
        </div>
      </div>
    </section>
  );
}