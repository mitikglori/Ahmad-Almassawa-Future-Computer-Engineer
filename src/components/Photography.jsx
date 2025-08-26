export default function Photography() {
    return (
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
    )
}