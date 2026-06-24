import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLayerGroup,
  faMobileScreen,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Services.css";

const services = [
  {
    icon: faCode,
    title: "Frontend Development",
    description:
      "Building responsive interfaces with React, TypeScript, Vite and clean component structure.",
  },
  {
    icon: faWandMagicSparkles,
    title: "UI Polish",
    description:
      "Turning simple layouts into polished product-like experiences with spacing, typography and motion.",
  },
  {
    icon: faMobileScreen,
    title: "Responsive Design",
    description:
      "Creating layouts that feel good on desktop, tablet and mobile screens.",
  },
  {
    icon: faLayerGroup,
    title: "Portfolio-ready Projects",
    description:
      "Planning, building, documenting and deploying complete frontend projects.",
  },
];

export function Services() {
  return (
    <section className="section-block services-section">
      <SectionHeader
        eyebrow="What I do"
        title="I turn ideas into polished frontend projects."
        description="I focus on building interfaces that look clean, feel responsive and are structured like real products."
      />

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}