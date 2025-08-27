import React from "react";

function Skills() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
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