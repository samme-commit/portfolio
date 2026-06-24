import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faEnvelope,
  faLocationDot,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Contact.css";

export function Contact() {
  return (
    <section className="section-block contact-section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Interested in working together?"
        description="I'm currently building frontend projects and looking for opportunities to keep improving, collaborate and create polished web experiences."
      />

      <div className="contact-card">
        <div className="contact-content">
          <div className="contact-status">
            <span className="contact-status-dot" />
            Available for frontend projects and junior opportunities
          </div>

          <h3>Let’s build something clean, modern and useful.</h3>

          <p>
            Whether it is a small business website, a landing page, a UI concept
            or a frontend project, I enjoy turning ideas into polished web
            experiences.
          </p>

          <div className="contact-meta">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              Sweden
            </span>

            <span>
              <FontAwesomeIcon icon={faCode} />
              React · TypeScript · UI polish
            </span>
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-panel-header">
            <span>Start here</span>
            <strong>Get in touch</strong>
          </div>

          <div className="contact-actions">
            <a className="contact-primary" href="mailto:sammeservice@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              Email me
              <FontAwesomeIcon icon={faArrowRight} />
            </a>

            <a
              href="https://github.com/samme-commit"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              View GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>

            <a href="#projects">
              View projects
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}