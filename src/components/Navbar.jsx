import { useState } from "react";

const formatLabel = (key = "") => key.charAt(0).toUpperCase() + key.slice(1);

export default function Navbar({ active, onNavigate, items, scrollProgress = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (key) => {
    setIsOpen(false);
    onNavigate(key);
  };

  return (
    <nav className="sticky top-0 inset-x-0 z-30 border-b border-slate-800/60 bg-slate-950/85 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-base sm:text-lg font-semibold tracking-wide text-slate-100">
            Ahmad Almassawa
          </span>

          <div className="hidden md:flex items-center gap-2">
            {items.map((key) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                    isActive
                      ? "text-blue-200 bg-blue-500/20 border border-blue-400/40 shadow-[0_8px_18px_rgba(37,99,235,0.18)]"
                      : "text-slate-200 border border-transparent hover:text-blue-200 hover:bg-slate-800/60"
                  }`}
                  onClick={() => handleNavigate(key)}
                >
                  {formatLabel(key)}
                </button>
              );
            })}
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full p-2.5 text-slate-200 ring-1 ring-slate-700/60 transition-smooth hover:bg-slate-800/80 hover:text-blue-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M10 18h10"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden origin-top border-t border-slate-800/60 bg-slate-950/90 backdrop-blur-xl transition-all duration-300 ease-out ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 pb-4 pt-2 flex flex-col gap-2">
          {items.map((key) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-smooth ${
                  isActive
                    ? "text-blue-200 bg-blue-500/10 border border-blue-400/40"
                    : "text-slate-200 border border-transparent hover:bg-slate-800/80"
                }`}
                onClick={() => handleNavigate(key)}
              >
                {formatLabel(key)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="h-0.5 w-full bg-slate-800/40">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 transition-[width] duration-500 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
