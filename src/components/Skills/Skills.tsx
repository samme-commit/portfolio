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
                <div className="skill-pill" key={skill.name} tabIndex={0}>
                  {skill.icon && <img src={skill.icon} alt="" aria-hidden="true" />}
                  <span>{skill.name}</span>

                  <div className="skill-tooltip">
                    <div className="skill-tooltip-header">
                      {skill.icon && <img src={skill.icon} alt="" aria-hidden="true" />}
                      <strong>{skill.name}</strong>
                    </div>

                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}