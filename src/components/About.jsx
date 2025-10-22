export default function About({ sectionId = "about", className = "" }) {
  const interests = [
    { icon: "💻", title: "Coding", description: "Building web applications and solving problems with code" },
    { icon: "🔧", title: "Electronics", description: "Experimenting with Arduino and hardware projects" },
    { icon: "📸", title: "Photography", description: "Capturing moments and telling stories through images" },
    { icon: "🎮", title: "Gaming", description: "Creating interactive experiences and game development" },
    { icon: "📚", title: "Learning", description: "Always exploring new technologies and concepts" },
    { icon: "🏃", title: "Sports", description: "Staying active and documenting athletic moments" }
  ];

  const achievements = [
    { year: "2024", title: "High School Valedictorian", description: "Top academic performance in graduating class" },
    { year: "2024", title: "Math Competition Winner", description: "First place in regional calculus competition" },
    { year: "2023", title: "Photography Award", description: "Best student photographer of the year" },
    { year: "2023", title: "Coding Bootcamp", description: "Completed intensive web development program" }
  ];

  const stats = [
    { value: "3+", label: "Years of coding" },
    { value: "15", label: "Projects completed" },
    { value: "5", label: "Competitions & awards" }
  ];

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
        <div className="absolute -bottom-32 -left-28 h-[30rem] w-[30rem] rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute top-10 right-12 h-[22rem] w-[22rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-16 px-4 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-bold text-slate-100 sm:text-5xl">
            About Me
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            A passionate high school student on a journey to become a computer engineer,
            combining technical skills with creative vision and a love for storytelling.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-8">
            <article className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.45)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-100">My journey</h3>
              <p className="mt-4 text-slate-300">
                I'm a high school student from Indonesia with a deep passion for computer engineering,
                coding, and creative problem-solving. My journey began when I discovered the magic of
                turning ideas into reality through code.
              </p>
              <p className="mt-4 text-slate-300">
                I enjoy building interactive math games, experimenting with Arduino electronics, and
                documenting student life through photography. My goal is to merge technology with creativity
                and storytelling, preparing for a future in computer engineering.
              </p>
            </article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-6 py-6 text-center shadow-[0_18px_35px_rgba(15,23,42,0.4)]"
                >
                  <p className="text-3xl font-semibold text-blue-200">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent p-10 text-center shadow-[0_20px_45px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="text-6xl">🎓</div>
              <h4 className="mt-6 text-xl font-semibold text-slate-100">
                Future Computer Engineer
              </h4>
              <p className="mt-3 text-sm text-slate-300">
                Currently in high school, preparing for university studies in Computer Engineering.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-[0_18px_35px_rgba(15,23,42,0.4)]">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
                Focus areas
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Building playful digital experiences that balance aesthetics and function.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  Exploring embedded systems through Arduino and hardware tinkering.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Capturing stories through photography to sharpen my eye for detail.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-slate-100">What I love</h3>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300">
              A blend of technical curiosity and creative exploration keeps me inspired and learning every day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="group rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6 text-center shadow-[0_16px_32px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {interest.icon}
                </div>
                <h4 className="mt-3 text-lg font-semibold text-slate-100 transition-colors group-hover:text-blue-200">
                  {interest.title}
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-slate-100">Key achievements</h3>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300">
              Milestones that fuel my ambition and remind me to keep learning.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6 shadow-[0_18px_35px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200">
                    <span className="text-base font-semibold">{achievement.year}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100">
                      {achievement.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_22px_45px_rgba(15,23,42,0.45)] backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100">Through my lens</h3>
              <p className="mt-4 text-slate-300">
                Photography helps me develop an eye for detail and composition—skills that translate well to UI/UX design
                and crafting intuitive experiences. I capture moments that tell stories, from sports events to candid student life.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-200">
                {['📸 Student Life', '🏆 Sports Events', '🎓 School Events', '🌅 Nature Shots'].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800/60 bg-slate-950/60 px-4 py-3 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent p-10 text-center shadow-[0_20px_45px_rgba(15,23,42,0.45)]">
              <div className="text-6xl">📷</div>
              <h4 className="mt-6 text-xl font-semibold text-slate-100">Visual storyteller</h4>
              <p className="mt-3 text-sm text-slate-300">
                Combining technical precision with creative vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}