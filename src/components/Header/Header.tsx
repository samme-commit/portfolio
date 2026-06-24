import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

export function Header() {
  return (
    <header className="site-header">
      <a className="header-logo" href="#top" aria-label="samme-commit portfolio">
        <span>SC</span>
        samme-commit
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="header-github"
        href="https://github.com/samme-commit"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </a>
    </header>
  );
}