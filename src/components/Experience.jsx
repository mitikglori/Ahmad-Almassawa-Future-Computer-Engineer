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
      accent: "bg-blue-500/20 text-blue-200 border-blue-400/40"
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
      accent: "bg-purple-500/20 text-purple-200 border-purple-400/40"
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
      accent: "bg-emerald-500/20 text-emerald-200 border-emerald-400/40"
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
      accent: "bg-amber-500/20 text-amber-200 border-amber-400/40"
    }
  ];

  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden py-20 sm:py-24 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        data-parallax-speed="0.05"
      >
        <div className="absolute -top-16 right-8 h-[22rem] w-[22rem] rounded-full bg-orange-500/12 blur-3xl" />
        <div className="absolute bottom-8 left-8 h-[18rem] w-[18rem] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
            Experience & Achievements
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Highlights from internships, passion projects, and competitions that have shaped my growth as a future computer engineer.
          </p>
        </header>

        <div className="mt-16 space-y-12">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_22px_45px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400/40"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-1 items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 text-2xl">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-100">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-blue-100">
                      {exp.company}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/60 px-3 py-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/60 px-3 py-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <span className={`inline-flex items-center justify-center self-start rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] ${exp.accent}`}>
                  {exp.type}
                </span>
              </div>

              <p className="mt-6 text-base text-slate-300">
                {exp.description}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] md:items-start">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
                    Key achievements
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
                    Tools & skills
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700/60 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 text-center shadow-[0_22px_45px_rgba(15,23,42,0.45)]">
          <h3 className="text-2xl font-semibold text-slate-100">Ready for the next challenge</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            I'm always looking for new opportunities to learn, grow, and make an impact. Whether it's an internship, project collaboration, or competition, I'm ready to take on the next challenge.
          </p>
          <a
            href="mailto:ahmad.almassawa@email.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)] transition-smooth hover:-translate-y-0.5 hover:bg-blue-400"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Let's connect
          </a>
        </div>
      </div>
    </section>
  );
}
