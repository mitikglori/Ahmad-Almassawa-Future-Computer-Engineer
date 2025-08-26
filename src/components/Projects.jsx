export default function Projects(){
    return(
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
    )
}
    