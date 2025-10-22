export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Get in touch
            </h3>
            <p className="text-sm text-slate-300">
              Ready to discuss opportunities or just want to chat about tech?
            </p>
            <a
              href="mailto:ahmad.almassawa@email.com"
              className="inline-flex items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100 transition-smooth hover:-translate-y-0.5 hover:bg-blue-500/20 md:justify-start"
            >
              ahmad.almassawa@email.com
            </a>
          </div>

          <div className="space-y-3 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Connect
            </h3>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/ahmad-almassawa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/60 text-slate-300 transition-smooth hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-200"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/ahmad-almassawa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/60 text-slate-300 transition-smooth hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-200"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.225 0H1.771C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.225 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-3 text-center md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Resume
            </h3>
            <p className="text-sm text-slate-300">
              Prefer a PDF? Grab a copy of my latest resume.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.3)] transition-smooth hover:-translate-y-0.5 hover:bg-blue-400 md:ml-auto"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3 3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/60 pt-6 text-center">
          <p className="text-xs text-slate-500 sm:text-sm">
            © 2024 Ahmad Almassawa. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
