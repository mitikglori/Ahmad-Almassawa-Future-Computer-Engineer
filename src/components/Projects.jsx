export default function Projects({ sectionId = "projects", className = "" }) {
  const projects = [
    {
      title: "Math Duel Game",
      description: "A competitive 1v1 calculus practice game where students can challenge each other in real-time math problems. Features live scoring, difficulty levels, and progress tracking.",
      image: "🧮",
      techStack: ["React", "JavaScript", "CSS3", "Local Storage"],
      features: ["Real-time multiplayer", "Difficulty scaling", "Progress tracking", "Responsive design"],
      links: {
        demo: "#",
        github: "#",
        live: "#"
      },
      status: "Completed",
      category: "Web Application"
    },
    {
      title: "Arduino Smart Home System",
      description: "IoT project controlling lights, temperature, and security sensors using Arduino microcontrollers. Includes a web dashboard for remote monitoring and control.",
      image: "🏠",
      techStack: ["Arduino", "C++", "JavaScript", "HTML/CSS", "MQTT"],
      features: ["Sensor integration", "Web dashboard", "Mobile responsive", "Real-time data"],
      links: {
        demo: "#",
        github: "#",
        live: "#"
      },
      status: "In Progress",
      category: "Hardware/IoT"
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and optimized performance for showcasing projects and skills.",
      image: "💼",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      features: ["Responsive design", "Smooth animations", "Dark theme", "SEO optimized"],
      links: {
        demo: "#",
        github: "#",
        live: "#"
      },
      status: "Completed",
      category: "Web Development"
    },
    {
      title: "Student Grade Calculator",
      description: "A web application that helps students calculate their GPA and track academic progress. Includes grade prediction and study planning features.",
      image: "📊",
      techStack: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
      features: ["GPA calculation", "Grade prediction", "Visual charts", "Study planning"],
      links: {
        demo: "#",
        github: "#",
        live: "#"
      },
      status: "Completed",
      category: "Educational Tool"
    }
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "Completed":
        return "border-emerald-400/50 bg-emerald-500/20 text-emerald-100";
      case "In Progress":
        return "border-amber-400/50 bg-amber-500/20 text-amber-100";
      case "Planned":
        return "border-blue-400/50 bg-blue-500/20 text-blue-100";
      default:
        return "border-slate-600/60 bg-slate-700/40 text-slate-200";
    }
  };

  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden py-20 sm:py-24 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        data-parallax-speed="0.1"
      >
        <div className="absolute -top-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            A curated selection of the work I'm most proud of—from playful experiments to real-world problem solving.
          </p>
        </header>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 shadow-[0_22px_45px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400/40"
            >
              <div className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-transparent">
                <div className="flex h-48 items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="absolute left-6 top-6">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${getStatusStyles(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 rounded-full border border-slate-700/60 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                    Tech stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                    Highlights
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.3)] transition-smooth hover:-translate-y-0.5 hover:bg-blue-400"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/60 px-5 py-2 text-sm font-semibold text-slate-200 transition-smooth hover:-translate-y-0.5 hover:border-blue-400/40"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-100 transition-smooth hover:-translate-y-0.5 hover:border-emerald-300/60"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 text-center shadow-[0_22px_45px_rgba(15,23,42,0.45)]">
          <h3 className="text-2xl font-semibold text-slate-100">Interested in my work?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            I'm always experimenting with new ideas and technologies. Feel free to reach out if you'd like to collaborate or learn more about any project!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ahmad.almassawa@email.com"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)] transition-smooth hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/ahmad-almassawa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/60 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-200 transition-smooth hover:-translate-y-0.5 hover:border-blue-400/40"
            >
              View all projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
    