import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./FeaturedProjects.css";

export function FeaturedProjects() {
  return (
    <section className="section-block featured-projects" id="projects">
      <SectionHeader
        eyebrow="Selected work"
        title="Featured Projects"
        description="A collection of frontend projects focused on clean UI, animation, responsive layouts and real product feeling."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}