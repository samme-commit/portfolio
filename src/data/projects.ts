export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  proof: string;
  stack: string[];
  repoUrl: string;
  liveUrl: string;
  image: string;
  accent: "purple" | "blue" | "cyan" | "pink" | "gold";
};

export const projects: Project[] = [
  {
    title: "Job Tracker",
    eyebrow: "Full-Stack SaaS App",
    description:
      "A full-stack job application tracker with authentication, application CRUD, dashboard statistics, settings, notifications and public user profiles.",
    proof:
      "Shows full-stack app structure, protected routes, session-based auth, JSON storage, profile uploads, public profiles and a live demo account with preloaded example data.",
    stack: [
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
      "Sessions",
      "Bcrypt",
      "Multer",
      "Zod"
    ],
    repoUrl: "https://github.com/samme-commit/job-tracker",
    liveUrl: "https://job-tracker-cxxv.onrender.com/",
    image: "/projects/job-tracker.png",
    accent: "blue",
  },
  {
    title: "Studio Forma",
    eyebrow: "Salon Website Concept",
    description:
      "A premium fictional hair salon website concept with services, treatments, locations, stylist profiles, gallery and a fake booking flow.",
    proof:
      "Shows small business website design, image-heavy layouts, reusable data-driven sections, responsive UI and modal state handling.",
    stack: ["React", "TypeScript", "Vite", "CSS", "Font Awesome"],
    repoUrl: "https://github.com/samme-commit/studio-forma",
    liveUrl: "https://sammecommit-studio-forma.vercel.app/",
    image: "/projects/studio-forma.png",
    accent: "gold",
  },
  {
    title: "PulsePay Checkout",
    eyebrow: "Fintech UI Concept",
    description:
      "A Stripe-inspired checkout UI with card validation, animated Apple Pay and Klarna flows, QR approval animation and receipt states.",
    proof:
      "Shows form validation, payment states, conditional rendering, animation flow and polished fintech UI.",
    stack: ["React", "TypeScript", "Vite", "CSS", "Font Awesome"],
    repoUrl: "https://github.com/samme-commit/pulsepay-checkout",
    liveUrl: "https://pulsepay-checkout.vercel.app/",
    image: "/projects/pulsepay.png",
    accent: "purple",
  },
  {
    title: "Stad & Strand",
    eyebrow: "Real Estate Concept",
    description:
      "A premium Swedish real estate landing page concept with property filtering, large image cards, agent profiles and polished responsive UI.",
    proof:
      "Shows filtering, structured data, reusable components, modals, forms and premium landing page design.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    repoUrl: "https://github.com/samme-commit/realestate-website-for-portfolio",
    liveUrl: "https://realestate-website-for-portfolio.vercel.app/",
    image: "/projects/stad-strand.png",
    accent: "cyan",
  },
  {
    title: "Fears to Fathom Redesign",
    eyebrow: "Fan Website Redesign",
    description:
      "An unofficial horror/VHS inspired redesign with interactive cards, dark visuals, episode sections and a strong atmospheric UI.",
    proof:
      "Shows atmospheric UI design, dark visual direction, interactive components and ReactBits-inspired effects.",
    stack: ["React", "TypeScript", "Vite", "CSS", "ReactBits"],
    repoUrl: "https://github.com/samme-commit/f2f-react-remake",
    liveUrl: "https://f2f-react-remake.vercel.app/",
    image: "/projects/fears-to-fathom.png",
    accent: "pink",
  },
];