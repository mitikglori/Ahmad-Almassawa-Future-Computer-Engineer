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
  const navigationTimeoutRef = useRef();

  const sectionOrder = useMemo(() => [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
  ], []);

  const handleNavigate = useCallback((key) => {
    const container = containerRef.current;
    const el = document.getElementById(key);

    if (!container || !el) {
      return;
    }

    // Cancel any pending navigation timeout from a previous invocation
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
      navigationTimeoutRef.current = undefined;
    }

    setIsNavigating(true);
    setActive(key);

    const rootStyles = getComputedStyle(document.documentElement);
    const navHeight = parseFloat(rootStyles.getPropertyValue("--nav-h")) || 0;
    const rawTarget = el.offsetTop - navHeight;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const targetPosition = Math.max(0, Math.min(rawTarget, maxScroll));

    const targetProgressValue = maxScroll > 0 ? (targetPosition / maxScroll) * 100 : 0;
    setTargetProgress(targetProgressValue);

    container.scrollTo({ top: targetPosition, behavior: "smooth" });

    navigationTimeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
      navigationTimeoutRef.current = undefined;
    }, 700);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

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
      
      // Get all sections and find the one that's most in view
      const allSections = Array.from(root.querySelectorAll('section[id]'));
      let bestMatch = null;
      let bestScore = -1;
      
      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const rootRect = root.getBoundingClientRect();
        
        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(rect.top, rootRect.top);
        const visibleBottom = Math.min(rect.bottom, rootRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / rect.height;
        
        // Calculate how close the section is to the top of the viewport
        const distanceFromTop = Math.abs(rect.top - rootRect.top);
        const positionScore = Math.max(0, 1 - distanceFromTop / rootRect.height);
        
        // Combined score: visibility ratio + position bonus
        const score = visibilityRatio + (positionScore * 0.3);
        
        if (score > bestScore && visibilityRatio > 0.1) { // Only consider sections that are at least 10% visible
          bestScore = score;
          bestMatch = section.getAttribute('id');
        }
      });
      
      if (bestMatch) setActive(bestMatch);
    };

    const observer = new IntersectionObserver(handler, options);
    const sections = root.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    // Add scroll event listener as backup
    const scrollHandler = () => {
      if (isNavigating) return;
      handler([]); // Trigger the same logic
    };

    root.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      observer.disconnect();
      root.removeEventListener('scroll', scrollHandler);
    };
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans flex flex-col">
      <Navbar
        active={active}
        onNavigate={handleNavigate}
        items={sectionOrder}
        scrollProgress={scrollProgress}
      />
      <main
        ref={containerRef}
        className="flex-1 overflow-y-auto scroll-smooth scroll-pt-[var(--nav-h)]"
      >
        <Home sectionId="home" className="min-h-[calc(100dvh-var(--nav-h))] scroll-mt-[var(--nav-h)]" />
        <About sectionId="about" className="scroll-mt-[var(--nav-h)]" />
        <Skills sectionId="skills" className="scroll-mt-[var(--nav-h)]" />
        <Experience sectionId="experience" className="scroll-mt-[var(--nav-h)]" />
        <Projects sectionId="projects" className="scroll-mt-[var(--nav-h)] pb-24" />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
