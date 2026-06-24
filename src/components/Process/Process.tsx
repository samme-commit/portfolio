import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCompassDrafting,
  faLayerGroup,
  faRocket,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./Process.css";

const processSteps = [
  {
    number: "01",
    icon: faCompassDrafting,
    title: "Plan",
    description:
      "I break the idea down into sections, features, structure and a clear direction before writing code.",
  },
  {
    number: "02",
    icon: faLayerGroup,
    title: "Design",
    description:
      "I define the visual style, spacing, typography, colors and layout so the project feels consistent.",
  },
  {
    number: "03",
    icon: faCode,
    title: "Build",
    description:
      "I create reusable React components, organize data and keep the code clean and easy to extend.",
  },
  {
    number: "04",
    icon: faWandMagicSparkles,
    title: "Polish",
    description:
      "I refine responsive behavior, animations, hover states, screenshots and small UI details.",
  },
  {
    number: "05",
    icon: faRocket,
    title: "Deploy",
    description:
      "I publish the project, write a README, add screenshots and make it portfolio-ready.",
  },
];

export function Process() {
  return (
    <section className="section-block process-section" id="process">
      <SectionHeader
        eyebrow="Process"
        title="How I build portfolio-ready projects."
        description="I try to approach each project like a real product: planned, designed, built, polished and deployed."
      />

      <div className="process-grid">
        {processSteps.map((step) => (
          <article className="process-card" key={step.title}>
            <div className="process-card-top">
              <span className="process-number">{step.number}</span>

              <div className="process-icon">
                <FontAwesomeIcon icon={step.icon} />
              </div>
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}