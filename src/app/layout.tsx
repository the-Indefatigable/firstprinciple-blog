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
