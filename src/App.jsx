import { useState } from "react";

function App() {
  const [active, setActive] = useState("home");

  const sections = {
    home: (
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-300">Ahmad Almassawa</h1>
        <p className="text-lg text-gray-200">
          Future Computer Engineer | Builder | Photographer
        </p>
      </section>
    ),
    projects: (
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-300">Math Duel Game</h3>
            <p className="mt-2 text-gray-200">
              Competitive 1v1 calculus practice game. Built with React.
            </p>
            <a
              href="#"
              className="inline-block mt-3 text-blue-400 hover:underline"
            >
              Play Demo
            </a>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-blue-300">Arduino Circuits</h3>
            <p className="mt-2 text-gray-200">
              Small projects experimenting with sensors and electronics.
            </p>
            <a
              href="#"
              className="inline-block mt-3 text-blue-400 hover:underline"
            >
              View Code
            </a>
          </div>
        </div>
      </section>
    ),
    photography: (
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">Photography</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-700 h-48 rounded-lg"></div>
          <div className="bg-gray-700 h-48 rounded-lg"></div>
          <div className="bg-gray-700 h-48 rounded-lg"></div>
        </div>
        <p className="mt-6 text-gray-300">
          Sports, candid, and event photography documenting student life.
        </p>
      </section>
    ),
    about: (
      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">About Me</h2>
        <p className="text-gray-200 leading-relaxed">
          I’m a high school student from Indonesia passionate about computer
          engineering, coding, and creative problem solving. From building math
          games to documenting events through photography, I aim to merge
          technology with storytelling.
        </p>
      </section>
    ),
    contact: (
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">Contact</h2>
        <p className="text-gray-200">Email: ahmad@example.com</p>
        <p className="text-gray-200">GitHub: github.com/ahmad</p>
      </section>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-center space-x-8 bg-gray-900 py-5 sticky top-0 shadow-lg z-10">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`capitalize px-3 py-1 rounded transition-colors duration-150 hover:text-blue-400 ${
              active === key ? "text-blue-400 font-bold" : "text-gray-200"
            }`}
            onClick={() => setActive(key)}
          >
            {key}
          </button>
        ))}
      </nav>

      {/* Section */}
      <main>{sections[active]}</main>
    </div>
  );
}

export default App;