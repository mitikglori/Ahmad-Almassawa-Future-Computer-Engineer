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
        video: "#"
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planned": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id={sectionId} className={`relative overflow-hidden py-16 px-4 max-w-7xl mx-auto ${className}`}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" data-parallax-speed="0.1">
        <div className="absolute -top-28 -right-20 w-[28rem] h-[28rem] rounded-full bg-emerald-500/18 blur-3xl" />
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-200">Featured Projects</h2>
        <p className="text-gray-300 text-lg">A showcase of my recent work and side projects</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
          >
            {/* Project Image/Icon */}
            <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-lg text-sm text-gray-300">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30">
          <h3 className="text-2xl font-bold text-blue-200 mb-4">Interested in my work?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always working on new projects and exploring different technologies. 
            Feel free to reach out if you'd like to collaborate or discuss any of my work!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:ahmad.almassawa@email.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="https://github.com/ahmad-almassawa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
    