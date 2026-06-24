import { skillGroups } from "../../data/skills";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Skills.css";

export function Skills() {
  return (
    <section className="section-block skills-section" id="skills">
      <SectionHeader
        eyebrow="Stack"
        title="Tools and skills I use."
        description="My current focus is modern frontend development with strong component structure, UI polish and responsive design."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}