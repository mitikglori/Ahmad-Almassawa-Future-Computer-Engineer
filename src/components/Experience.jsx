import React from "react";

function Experience({ sectionId = "experience", className = "" }) {
  return (
    <section id={sectionId} className={`max-w-3xl mx-auto py-12 px-6 ${className}`}>
      <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        <div className="bg-gray-900 rounded-lg p-6 shadow">
          <h3 className="text-2xl font-semibold mb-2">Intern, Company Name</h3>
          <p className="text-gray-400 mb-2">June 2024 - August 2024</p>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Worked on frontend development using React and Tailwind CSS.</li>
            <li>Collaborated with a team to deliver a web application.</li>
            <li>Participated in code reviews and agile meetings.</li>
          </ul>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 shadow">
          <h3 className="text-2xl font-semibold mb-2">Project, University Name</h3>
          <p className="text-gray-400 mb-2">Jan 2024 - May 2024</p>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Developed a portfolio website using React.</li>
            <li>Implemented responsive design with Tailwind CSS.</li>
            <li>Showcased personal projects and achievements.</li>
          </ul>
        </div>
        {/* Add more experience entries as needed */}
      </div>
    </section>
  );
}

export default Experience;