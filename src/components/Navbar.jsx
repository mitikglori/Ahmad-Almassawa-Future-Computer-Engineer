import { useState } from "react";

export default function Navbar({ active, onNavigate, items, scrollProgress = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (key) => {
    setIsOpen(false);
    onNavigate(key);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 shadow-lg z-10 backdrop-blur-sm bg-opacity-95 relative">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 md:justify-center md:space-x-8 relative">
        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-blue-300 hover:bg-gray-800 transition-smooth"
          aria-label="Open menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg className={`w-6 h-6 transition-transform ${isOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Brand / Title */}
        <span className="ml-3 text-gray-100 font-semibold tracking-wide select-none md:absolute md:left-4">
          Ahmad Almassawa
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {items.map((key) => (
            <button
              key={key}
              className={`capitalize px-4 py-2 rounded-lg transition-smooth hover-lift hover-scale ${
                active === key 
                  ? "text-blue-400 font-bold bg-blue-400 bg-opacity-10 border border-blue-400 border-opacity-30" 
                  : "text-gray-200 hover:text-blue-300 hover:bg-gray-800"
              }`}
              onClick={() => handleNavigate(key)}
            >
              <span className="relative">
                {key}
                {active === key && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 scale-in" />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-4 pb-3 flex flex-col space-y-2">
          {items.map((key) => (
            <button
              key={key}
              className={`text-left capitalize w-full px-4 py-2 rounded-lg transition-smooth ${
                active === key 
                  ? "text-blue-400 font-bold bg-blue-400 bg-opacity-10 border border-blue-400 border-opacity-30" 
                  : "text-gray-200 hover:text-blue-300 hover:bg-gray-800"
              }`}
              onClick={() => handleNavigate(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-500 ease-out"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </nav>
  );
}
