import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../../data/projects";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-preview">
        <div className="preview-window">
          <div className="preview-topbar">
            <span />
            <span />
            <span />
          </div>

          <div className="preview-content">
            <div className="preview-pill">{project.eyebrow}</div>
            <div className="preview-title">{project.title}</div>
            <div className="preview-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="project-info">
        <span className="project-eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>

          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Source
            <FontAwesomeIcon icon={faCodeBranch} />
          </a>
        </div>
      </div>
    </article>
  );
}