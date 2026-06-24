import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { FeaturedProjects } from "./components/FeaturedProjects/FeaturedProjects";
import { Footer } from "./components/Footer/Footer";
import { GradientOrb } from "./components/GradientOrb/GradientOrb";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Skills } from "./components/Skills/Skills";
import "./App.css";

export default function App() {
  return (
    <main className="portfolio-shell">
      <GradientOrb />

      <Header />

      <div className="page-content">
        <Hero />
        <Services />
        <FeaturedProjects />
        <About />
        <Skills />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}