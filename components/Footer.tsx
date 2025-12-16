export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] mt-24">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Puneeth Jain. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/Puneeth-24"
            target="_blank"
            className="hover:text-[var(--accent)] transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/puneeth-jain-s-13534132a/"
            target="_blank"
            className="hover:text-[var(--accent)] transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:puneethjains2005@gmail.com"
            className="hover:text-[var(--accent)] transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
