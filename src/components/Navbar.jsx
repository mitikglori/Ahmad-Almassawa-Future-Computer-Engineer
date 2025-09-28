export default function Navbar({ active, onNavigate, items }) {
  return (
    <nav className="flex justify-center space-x-8 bg-gray-900 py-5 sticky top-0 shadow-lg z-10 backdrop-blur-sm bg-opacity-95">
      {items.map((key) => (
        <button
          key={key}
          className={`capitalize px-4 py-2 rounded-lg transition-smooth hover-lift hover-scale ${
            active === key 
              ? "text-blue-400 font-bold bg-blue-400 bg-opacity-10 border border-blue-400 border-opacity-30" 
              : "text-gray-200 hover:text-blue-300 hover:bg-gray-800"
          }`}
          onClick={() => onNavigate(key)}
        >
          <span className="relative">
            {key}
            {active === key && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 scale-in" />
            )}
          </span>
        </button>
      ))}
    </nav>
  );
}
