export default function Navbar({ active, setActive, sections }) {
  return (
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
  );
}
