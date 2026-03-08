import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Non-blocking font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sora:wght@300;400;500;600;700;800&display=swap"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('fp-theme');var r=t==='dark'?'dark':t==='light'?'light':window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',r)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        {/* ── Navbar ── */}
        <nav className="navbar">
          <div className="navbar-inner">
            <a
              href="https://www.firstprincipleslearningg.com"
              className="navbar-brand"
              aria-label="FirstPrinciple - Back to main site"
            >
              <div className="navbar-logo-mark">fp</div>
              <div className="navbar-logo-text">FirstPrinciple</div>
            </a>

            <a
              className="navbar-cta"
              href="https://www.firstprincipleslearningg.com"
            >
              ← Back to Home
            </a>

            <ThemeToggle />
          </div>
        </nav>

        {children}

        {/* ── Footer ── */}
        <footer className="blog-footer">
          <p>
            © {new Date().getFullYear()} FirstPrinciple Tutoring ·
            <a
              href="https://www.firstprincipleslearningg.com"
              style={{ marginLeft: 6 }}
            >
              Back to main site →
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
