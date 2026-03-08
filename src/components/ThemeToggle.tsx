"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ICONS: Record<string, string> = {
    light: "☀️",
    dark: "🌙",
    system: "💻",
};

function getSystemPref(): "light" | "dark" {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export default function ThemeToggle() {
    const [theme, setThemeState] = useState<Theme>("system");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("fp-theme") as Theme | null;
        const t = stored ?? "system";
        setThemeState(t);
        applyTheme(t === "system" ? getSystemPref() : t);
        setMounted(true);

        // Listen for system changes
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => {
            const current = localStorage.getItem("fp-theme") as Theme | null;
            if ((current ?? "system") === "system") {
                applyTheme(getSystemPref());
            }
        };
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    function applyTheme(resolved: "light" | "dark") {
        document.documentElement.setAttribute("data-theme", resolved);
    }

    function setTheme(t: Theme) {
        setThemeState(t);
        localStorage.setItem("fp-theme", t);
        applyTheme(t === "system" ? getSystemPref() : t);
    }

    if (!mounted) return null;

    const options: Theme[] = ["light", "dark", "system"];

    return (
        <div className="theme-toggle" role="radiogroup" aria-label="Choose theme">
            {options.map((opt) => (
                <button
                    key={opt}
                    className={`theme-toggle-btn ${theme === opt ? "active" : ""}`}
                    onClick={() => setTheme(opt)}
                    aria-checked={theme === opt}
                    role="radio"
                    title={opt.charAt(0).toUpperCase() + opt.slice(1)}
                >
                    <span className="theme-icon">{ICONS[opt]}</span>
                </button>
            ))}
        </div>
    );
}
