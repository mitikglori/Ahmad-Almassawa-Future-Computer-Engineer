export default function Home({ sectionId = "home", className = "" }) {
  return (
    <section id={sectionId} className={`relative overflow-hidden py-20 px-4 text-center min-h-screen flex flex-col justify-center ${className}`}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" data-parallax-speed="0.12">
        <div className="absolute -top-40 right-6 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="space-y-6 relative">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-300 slide-up">
          Ahmad Almassawa
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 slide-up stagger-1">
          {/* Future Computer Engineer | Builder | Photographer */}Future Computer engineer | Lorem ipsum dolor sit amet.
        </p>
        <div className="flex justify-center space-x-4 mt-8 slide-up stagger-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </section>
  );
}
