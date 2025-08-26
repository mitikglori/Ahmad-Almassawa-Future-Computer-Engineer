export default function Footer() {
  return (
    <footer className="mt-16 py-8 px-4 border-t border-gray-800 text-center text-gray-400">
      <div className="flex items-center justify-center gap-6 mb-3">
        <span className="hover:text-blue-400 transition-colors cursor-pointer">GitHub</span>
        <span className="hover:text-blue-400 transition-colors cursor-pointer">LinkedIn</span>
        <span className="hover:text-blue-400 transition-colors cursor-pointer">Email</span>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Ahmad Almassawa</p>
    </footer>
  );
}


