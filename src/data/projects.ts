export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  repoUrl: string;
  liveUrl: string;
  accent: "purple" | "blue" | "cyan" | "pink";
};

export const projects: Project[] = [
  {
    title: "PulsePay Checkout",
    eyebrow: "Fintech UI Concept",
    description:
      "A Stripe-inspired checkout UI with card validation, animated Apple Pay and Klarna flows, QR approval animation and receipt states.",
    stack: ["React", "TypeScript", "Vite", "CSS", "Font Awesome"],
    repoUrl: "https://github.com/samme-commit/pulsepay-checkout",
    liveUrl: "https://pulsepay-checkout.vercel.app/",
    accent: "purple",
  },
  {
    title: "Stad & Strand",
    eyebrow: "Real Estate Concept",
    description:
      "A premium Swedish real estate landing page concept with property filtering, large image cards, agent profiles and polished responsive UI.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    repoUrl: "https://github.com/samme-commit/realestate-website-for-portfolio",
    liveUrl: "https://realestate-website-for-portfolio.vercel.app/",
    accent: "cyan",
  },
  {
    title: "Fears to Fathom Redesign",
    eyebrow: "Fan Website Redesign",
    description:
      "An unofficial horror/VHS inspired redesign with interactive cards, dark visuals, episode sections and a strong atmospheric UI.",
    stack: ["React", "TypeScript", "Vite", "CSS", "ReactBits"],
    repoUrl: "https://github.com/samme-commit/f2f-react-remake",
    liveUrl: "https://f2f-react-remake.vercel.app/",
    accent: "pink",
  },
];