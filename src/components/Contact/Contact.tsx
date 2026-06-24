import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Contact.css";

export function Contact() {
  return (
    <section className="section-block contact-section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Want to connect?"
        description="You can find my projects on GitHub or contact me by email."
      />

      <div className="contact-card">
        <div>
          <h3>Let's build something clean.</h3>
          <p>
            I'm currently focused on improving my React, TypeScript and frontend
            UI skills through portfolio projects.
          </p>
        </div>

        <div className="contact-actions">
          <a href="mailto:sammeservice@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            Email me
          </a>

          <a
            href="https://github.com/samme-commit"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </section>
  );
}