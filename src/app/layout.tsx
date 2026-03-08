import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | FirstPrinciple Blog",
    default: "FirstPrinciple Blog — STEM Tutorials & Guides",
  },
  description:
    "Deep-dive tutorials on Math, Physics, and Computer Science. First-principles explanations with interactive tools.",
  metadataBase: new URL("https://www.firstprincipleslearningg.com"),
  openGraph: {
    siteName: "FirstPrinciple Blog",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ── Header ── */}
        <header className="blog-header">
          <div className="blog-header-inner">
            <a href="https://www.firstprincipleslearningg.com" className="blog-header-logo">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" rx="20" fill="url(#g)" />
                <text x="50" y="50" textAnchor="middle" dominantBaseline="central"
                  fontFamily="sans-serif" fontWeight="800" fontSize="52" fill="white">fp</text>
              </svg>
              FirstPrinciple
            </a>
            <nav className="blog-header-nav">
              <a href="/blog">Blog</a>
              <a href="https://www.firstprincipleslearningg.com/math">Math Tools</a>
              <a href="https://www.firstprincipleslearningg.com/physics">Physics</a>
              <a href="https://www.firstprincipleslearningg.com/cs">CS Tools</a>
            </nav>
          </div>
        </header>

        {children}

        {/* ── Footer ── */}
        <footer className="blog-footer">
          <p>
            © {new Date().getFullYear()} FirstPrinciple Tutoring ·
            <a href="https://www.firstprincipleslearningg.com" style={{ marginLeft: 6 }}>
              Back to main site →
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
