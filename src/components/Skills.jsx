import React from "react";

function Skills({ sectionId = "skills", className = "" }) {
  return (
    <section id={sectionId} className={`relative overflow-hidden max-w-3xl mx-auto py-12 px-6 ${className}`}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" data-parallax-speed="0.08">
        <div className="absolute -bottom-28 right-0 w-80 h-80 rounded-full bg-sky-500/18 blur-3xl" />
      </div>
      <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-4 flex flex-col items-center shadow">
          <span className="text-lg font-semibold mb-2">JavaScript</span>
          <span className="text-sm text-gray-400">Advanced</span>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 flex flex-col items-center shadow">
          <span className="text-lg font-semibold mb-2">React</span>
          <span className="text-sm text-gray-400">Advanced</span>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 flex flex-col items-center shadow">
          <span className="text-lg font-semibold mb-2">Tailwind CSS</span>
          <span className="text-sm text-gray-400">Intermediate</span>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 flex flex-col items-center shadow">
          <span className="text-lg font-semibold mb-2">HTML & CSS</span>
          <span className="text-sm text-gray-400">Advanced</span>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 flex flex-col items-center shadow">
          <span className="text-lg font-semibold mb-2">Git & GitHub</span>
          <span className="text-sm text-gray-400">Intermediate</span>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 flex flex-col items-center shadow">
          <span className="text-lg font-semibold mb-2">Python</span>
          <span className="text-sm text-gray-400">Intermediate</span>
        </div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
}

export default Skills;