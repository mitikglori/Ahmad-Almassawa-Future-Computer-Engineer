export default function Education() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow">
          <h3 className="text-lg font-semibold text-blue-300">High School • City</h3>
          <p className="text-gray-400 text-sm">2022 — Present</p>
          <p className="mt-2 text-gray-200">Visual placeholder for school details.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow">
          <h3 className="text-lg font-semibold text-blue-300">Courses/Certifications</h3>
          <p className="text-gray-400 text-sm">Ongoing</p>
          <p className="mt-2 text-gray-200">Visual placeholder for key coursework.</p>
        </div>
      </div>
    </section>
  );
}


