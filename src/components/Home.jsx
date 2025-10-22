const highlights = [
  { label: "Focus", value: "UI/UX & Frontend Development" },
  { label: "Location", value: "Jakarta, Indonesia" },
  { label: "Status", value: "Open to new opportunities" }
];

export default function Home({ sectionId = "home", className = "" }) {
  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden py-20 sm:py-24 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        data-parallax-speed="0.12"
      >
        <div className="absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-10 text-center lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
              Future Computer Engineer
            </span>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Ahmad Almassawa
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl lg:mx-0">
                Future Computer engineer | Lorem ipsum dolor sit amet. Passionate about crafting intuitive digital experiences, building delightful products, and translating complex ideas into clear, human-centered solutions.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="w-full rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-smooth hover:-translate-y-0.5 hover:bg-blue-400 sm:w-auto"
              >
                View Projects
              </a>
              <a
                href="mailto:ahmad.almassawa@email.com"
                className="w-full rounded-full border border-blue-400/40 bg-transparent px-6 py-3 text-center text-sm font-semibold text-blue-100 transition-smooth hover:bg-blue-500/10 sm:w-auto"
              >
                Let's Connect
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-5 py-4 text-left shadow-[0_15px_35px_rgba(15,23,42,0.35)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative">
              <div className="aspect-square w-full rounded-[2.75rem] border border-slate-700/60 bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-transparent shadow-[0_25px_45px_rgba(15,23,42,0.5)] backdrop-blur">
                <div className="flex h-full items-center justify-center text-7xl">
                  🎓
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-slate-700/60 bg-slate-950/80 px-6 py-5 shadow-[0_20px_45px_rgba(15,23,42,0.55)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Currently
                </p>
                <p className="mt-2 text-sm font-medium text-slate-100">
                  High school student blending code, creativity, and storytelling.
                </p>
              </div>
            </div>

            <div className="absolute -top-10 -right-8 hidden sm:block">
              <div className="rounded-full border border-blue-400/40 bg-blue-500/20 px-4 py-2 text-xs font-semibold text-blue-100 shadow-lg">
                Building ideas into experiences
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
