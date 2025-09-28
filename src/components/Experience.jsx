export default function Experience({ sectionId = "experience", className = "" }) {
  const experiences = [
    {
      type: "Internship",
      title: "Frontend Development Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "June 2024 - August 2024",
      description: "Worked on frontend development using React and Tailwind CSS, collaborating with a team to deliver web applications.",
      achievements: [
        "Developed responsive user interfaces using React and Tailwind CSS",
        "Collaborated with a team of 5 developers to deliver 3 web applications",
        "Participated in daily standups and code review sessions",
        "Improved application performance by 30% through optimization"
      ],
      skills: ["React", "JavaScript", "Tailwind CSS", "Git", "Agile"],
      icon: "💼",
      color: "blue"
    },
    {
      type: "Project",
      title: "Portfolio Website Development",
      company: "Personal Project",
      location: "Remote",
      duration: "Jan 2024 - May 2024",
      description: "Built a comprehensive portfolio website showcasing projects, skills, and achievements with modern design principles.",
      achievements: [
        "Developed responsive portfolio using React and Tailwind CSS",
        "Implemented smooth animations and interactive elements",
        "Optimized for SEO and performance (95+ Lighthouse score)",
        "Integrated contact forms and project showcases"
      ],
      skills: ["React", "Tailwind CSS", "JavaScript", "Vite", "SEO"],
      icon: "💻",
      color: "purple"
    },
    {
      type: "Volunteer",
      title: "Coding Mentor",
      company: "High School Coding Club",
      location: "School",
      duration: "Sep 2023 - Present",
      description: "Mentoring fellow students in programming fundamentals and helping them with coding projects and competitions.",
      achievements: [
        "Mentored 15+ students in JavaScript and Python programming",
        "Organized coding workshops and hackathons",
        "Helped students prepare for programming competitions",
        "Created learning materials and coding challenges"
      ],
      skills: ["Teaching", "JavaScript", "Python", "Leadership", "Communication"],
      icon: "👨‍🏫",
      color: "green"
    },
    {
      type: "Competition",
      title: "Math Competition Winner",
      company: "Regional Math Olympiad",
      location: "Jakarta",
      duration: "March 2024",
      description: "Achieved first place in regional calculus competition, demonstrating strong mathematical problem-solving skills.",
      achievements: [
        "First place in regional calculus competition",
        "Solved complex mathematical problems under time pressure",
        "Represented school in national-level competition",
        "Developed efficient problem-solving strategies"
      ],
      skills: ["Calculus", "Problem Solving", "Analytical Thinking", "Time Management"],
      icon: "🏆",
      color: "yellow"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    };
    return colors[color] || colors.blue;
  };

  const getTypeColor = (type) => {
    const types = {
      Internship: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      Project: "bg-purple-600/20 text-purple-300 border-purple-600/30",
      Volunteer: "bg-green-600/20 text-green-300 border-green-600/30",
      Competition: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30"
    };
    return types[type] || types.Project;
  };

  return (
    <section id={sectionId} className={`relative overflow-hidden py-16 px-4 max-w-6xl mx-auto ${className}`}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" data-parallax-speed="0.05">
        <div className="absolute -top-20 right-10 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl" />
      </div>
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-200">Experience & Achievements</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          My journey through internships, projects, and competitions that have shaped my growth as a future computer engineer.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden lg:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 hidden lg:block z-10"></div>
              
              <div className="lg:ml-16">
                <div className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{exp.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-200 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-200 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-gray-300">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-blue-200 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className={`px-3 py-1 rounded-lg text-xs font-medium border ${getColorClasses(exp.color)}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30">
          <h3 className="text-2xl font-bold text-blue-200 mb-4">Ready for the Next Challenge</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always looking for new opportunities to learn, grow, and make an impact. 
            Whether it's an internship, project collaboration, or competition, I'm ready to take on the next challenge.
          </p>
          <a 
            href="mailto:ahmad.almassawa@email.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
