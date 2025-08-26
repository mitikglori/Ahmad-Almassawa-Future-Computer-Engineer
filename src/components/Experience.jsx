export default function Experience() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200">Experience</h2>
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-3 top-0 bottom-0 w-0.5 bg-gray-700" />
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -left-1.5 md:-left-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-400" />
            <div className="p-5 bg-gray-800 rounded-xl border border-gray-700 shadow">
              <h3 className="text-lg font-semibold text-blue-300">Role/Club • School</h3>
              <p className="text-gray-400 text-sm">2024 — Present</p>
              <p className="mt-2 text-gray-200">Visual-only timeline item placeholder.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-1.5 md:-left-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-400" />
            <div className="p-5 bg-gray-800 rounded-xl border border-gray-700 shadow">
              <h3 className="text-lg font-semibold text-blue-300">Volunteer/Project • Community</h3>
              <p className="text-gray-400 text-sm">2023 — 2024</p>
              <p className="mt-2 text-gray-200">Visual-only timeline item placeholder.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


