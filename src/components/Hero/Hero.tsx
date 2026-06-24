import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBolt, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TextReveal } from "../TextReveal/TextReveal";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-badge">
        <FontAwesomeIcon icon={faBolt} />
        Building premium frontend projects
      </div>

      <h1>
        <TextReveal
          text="I build polished frontend experiences that feel like real products."
          highlightWords={["real", "products"]}
        />
      </h1>

      <p className="hero-description">
        I'm Samuel, a frontend-focused developer from Sweden building modern,
        responsive web projects with React, TypeScript and carefully crafted UI.
      </p>

      <div className="hero-availability">
        <span className="availability-dot" />
        Available for frontend projects, internships and junior opportunities
      </div>

      <div className="hero-actions">
        <a className="primary-button" href="#projects">
          View my work
          <FontAwesomeIcon icon={faArrowRight} />
        </a>

        <a
          className="secondary-button"
          href="https://github.com/samme-commit"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          Contact me
        </a>
      </div>

      <div className="hero-tech-row">
        <span>
          <FontAwesomeIcon icon={faCode} />
          React
        </span>
        <span>TypeScript</span>
        <span>Vite</span>
        <span>CSS</span>
        <span>UI Polish</span>
      </div>
    </section>
  );
}