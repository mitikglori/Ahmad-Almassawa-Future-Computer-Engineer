import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";


function App() {
  const [active, setActive] = useState("home");

  const sectionOrder = useMemo(() => [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
  ], []);

  const handleNavigate = useCallback((key) => {
    const el = document.getElementById(key);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(key);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const options = {
      root,
      threshold: 0.3, // Reduced threshold for better detection
      rootMargin: "-10% 0px -10% 0px", // Better margin for detection
    };

    const handler = (entries) => {
      let topMost = null;
      let maxRatio = 0;
      
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          topMost = entry.target.getAttribute('id');
        }
      }
      
      if (topMost) setActive(topMost);
    };

    const observer = new IntersectionObserver(handler, options);
    const sections = root.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let rafId = 0;

    const update = () => {
      const scrollTop = root.scrollTop;
      const layers = root.querySelectorAll('[data-parallax-speed]');
      layers.forEach((el) => {
        const speedAttr = el.getAttribute('data-parallax-speed');
        const speed = Number(speedAttr || 0);
        const translateY = Math.round(scrollTop * speed);
        el.style.transform = `translateY(${translateY}px)`;
      });
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    root.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      root.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Navbar active={active} onNavigate={handleNavigate} items={sectionOrder} />
      <main ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Home sectionId="home" className="h-screen snap-start scroll-mt-20" />
        <About sectionId="about" className="min-h-screen snap-start scroll-mt-20" />
        <Skills sectionId="skills" className="min-h-screen snap-start scroll-mt-20" />
        <Experience sectionId="experience" className="min-h-screen snap-start scroll-mt-20" />
        <Projects sectionId="projects" className="min-h-screen snap-start scroll-mt-20" />
      </main>
    </div>
  );
}

export default App;
