export default function Skills({ sectionId = "skills", className = "" }) {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "React", level: 85, icon: "⚛️" },
        { name: "HTML & CSS", level: 95, icon: "🌐" },
        { name: "Tailwind CSS", level: 80, icon: "🎨" },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Git & GitHub", level: 85, icon: "📦" },
        { name: "Node.js", level: 70, icon: "🟢" },
        { name: "MongoDB", level: 65, icon: "🍃" },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Photoshop", level: 70, icon: "🖼️" },
        { name: "Arduino", level: 60, icon: "🔧" },
      ]
    }
  ];

  const getLevelColor = (level) => {
    if (level >= 80) return "from-emerald-400 via-emerald-500 to-emerald-400";
    if (level >= 60) return "from-sky-400 via-sky-500 to-sky-400";
    return "from-amber-400 via-amber-500 to-amber-400";
  };

  const getLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden py-20 sm:py-24 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        data-parallax-speed="0.08"
      >
        <div className="absolute -bottom-28 right-0 h-[24rem] w-[24rem] rounded-full bg-sky-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            A snapshot of the tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-center text-2xl font-semibold text-blue-100">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-[0_18px_35px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400/40"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <p className="text-base font-semibold text-slate-100">
                            {skill.name}
                          </p>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                            {getLevelText(skill.level)}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-blue-400/40 px-3 py-1 text-xs font-semibold text-blue-100">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                        <span>Hands-on experience</span>
                        <span className="text-blue-200">{skill.level}%</span>
                      </div>
                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} progress-bar`}
                          style={{
                            '--target-width': `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 text-center shadow-[0_22px_45px_rgba(15,23,42,0.45)]">
          <h4 className="text-xl font-semibold text-slate-100">Always learning</h4>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300">
            I'm constantly exploring new technologies and refining my craft. Lately I've been diving deeper into
            system design, computer architecture, and elevating user experiences through thoughtful interaction design.
          </p>
        </div>
      </div>
    </section>
  );
}
