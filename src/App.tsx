import { lazy, Suspense } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import FloatingBackground from "./components/FloatingBackground";
import Footer from "./components/Footer";
import Hero from "./sections/Hero/Hero";

// Lazy load sections for performance
const About = lazy(() => import("./sections/About/About"));
const Experience = lazy(() => import("./sections/Experience/Experience"));
const Projects = lazy(() => import("./sections/Projects/Projects"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const CoverLetter = lazy(() => import("./sections/CoverLetter/CoverLetter"));
const Contact = lazy(() => import("./sections/Contact/Contact"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Global 3D floating background - visible across ALL sections */}
      <FloatingBackground />

      <ScrollProgress />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CoverLetter />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

