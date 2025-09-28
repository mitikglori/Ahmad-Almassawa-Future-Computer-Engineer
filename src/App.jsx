import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";


function App() {
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetProgress, setTargetProgress] = useState(0);

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
      setIsNavigating(true);
      setActive(key);
      
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = el.offsetTop - navbarHeight;
      
      // Calculate target progress for smooth animation
      const container = containerRef.current;
      if (container) {
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const targetProgressValue = scrollHeight > 0 ? (elementPosition / scrollHeight) * 100 : 0;
        setTargetProgress(targetProgressValue);
      }
      
      containerRef.current?.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      
      // Reset navigation lock after scroll completes
      const resetNavigation = () => {
        setTimeout(() => {
          setIsNavigating(false);
        }, 800);
      };
      
      // Listen for scroll end
      const handleScrollEnd = () => {
        setIsNavigating(false);
        containerRef.current?.removeEventListener('scroll', handleScrollEnd);
      };
      
      // Fallback timeout
      resetNavigation();
      
      // Listen for scroll end (more reliable)
      let scrollTimeout;
      const onScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          handleScrollEnd();
        }, 150);
      };
      
      containerRef.current?.addEventListener('scroll', onScroll, { passive: true });
    }
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const options = {
      root,
      threshold: [0, 0.1, 0.5, 0.9, 1], // Multiple thresholds for better detection
      rootMargin: "-20% 0px -20% 0px", // More precise margin
    };

    const handler = (entries) => {
      // Don't update active state during navigation
      if (isNavigating) return;
      
      // Find the section with the highest intersection ratio
      let bestMatch = null;
      let bestRatio = 0;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
          bestRatio = entry.intersectionRatio;
          bestMatch = entry.target.getAttribute('id');
        }
      });
      
      if (bestMatch) setActive(bestMatch);
    };

    const observer = new IntersectionObserver(handler, options);
    const sections = root.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [isNavigating]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let rafId = 0;

    const update = () => {
      const scrollTop = root.scrollTop;
      const scrollHeight = root.scrollHeight - root.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      // Only update progress if not navigating (to allow smooth animation)
      if (!isNavigating) {
        setScrollProgress(progress);
      }

      const layers = root.querySelectorAll('[data-parallax-speed]');
      layers.forEach((el) => {
        const speed = Number(el.getAttribute('data-parallax-speed') || 0);
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
  }, [isNavigating]);

  // Smooth progress bar animation during navigation
  useEffect(() => {
    if (isNavigating) {
      const animateProgress = () => {
        setScrollProgress(prev => {
          const diff = targetProgress - prev;
          if (Math.abs(diff) < 0.1) {
            return targetProgress;
          }
          return prev + diff * 0.1; // Smooth interpolation
        });
      };
      
      const interval = setInterval(animateProgress, 16); // ~60fps
      return () => clearInterval(interval);
    }
  }, [isNavigating, targetProgress]);

  return (
    <div className="h-screen bg-gray-950 text-white font-sans flex flex-col">
      <Navbar active={active} onNavigate={handleNavigate} items={sectionOrder} scrollProgress={scrollProgress} />
      <main ref={containerRef} className="flex-1 overflow-y-scroll scroll-smooth">
        <Home sectionId="home" className="h-screen scroll-mt-20" />
        <About sectionId="about" className="min-h-screen scroll-mt-20" />
        <Skills sectionId="skills" className="min-h-screen scroll-mt-20" />
        <Experience sectionId="experience" className="min-h-screen scroll-mt-20" />
        <Projects sectionId="projects" className="min-h-screen scroll-mt-20" />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
