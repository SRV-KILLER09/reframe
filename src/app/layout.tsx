import type { Metadata } from "next";
import { Bebas_Neue, Syne, DM_Sans } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Reframe — Resize, trim, and export videos in your browser",
  description: "Free, open-source video editor that runs entirely in your browser. No login, no uploads, no ads. Resize for any platform, trim, rotate, adjust speed, and export.",
  keywords: [
    "video editor",
    "browser video editor",
    "open source video editor",
    "resize videos",
    "trim videos",
    "rotate videos",
    "online video editor",
  ],

  authors: [{ name: "Reframe" }],

  openGraph: {
    title: "Reframe",
    description:
      "Free, open-source browser-based video editor. Resize, trim, rotate, and export videos directly in your browser.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reframe",
    description:
      "Free, open-source browser-based video editor. Resize, trim, rotate, and export videos directly in your browser.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
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
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored === 'dark' || (!stored && prefersDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased relative overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <ErrorBoundary>
            <header
              role="banner"
              className="navbar-glass sticky top-0 z-50 px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
            >
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-2xl font-black text-[var(--accent)] heading-3d drop-shadow whitespace-nowrap">REFRAME</span>
                <span className="text-xs font-heading tracking-widest text-[var(--muted)] heading-3d -mt-1 truncate">Resize, trim, and export videos in your browser</span>
              </div>
              <div className="flex flex-row items-center gap-4 flex-shrink-0 min-w-0 w-full sm:w-auto justify-end max-w-xs">
                <ThemeToggle />
                {/* GitHub Star button slot, if present */}
                <div id="github-star-slot" className="ml-16 mr-20 sm:ml-14 sm:mr-16" />
              </div>
            </header>
            <main role="main" id="main-content" tabIndex={-1}>
              {children}
            </main>
            <footer
              role="contentinfo"
              className="footer-3d px-6 py-6 text-sm text-[var(--muted)] flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-[var(--accent)] drop-shadow-[0_2px_8px_rgba(59,130,246,0.15)]">✨</span>
                <span className="font-heading tracking-widest text-[13px] text-[var(--text)]">2026 Reframe</span>
                <span className="hidden sm:inline text-[11px] text-[var(--muted)] ml-2">Free, open source, no login required.</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <span className="hidden sm:inline">All video processing happens locally in your browser using <span className="font-bold text-[var(--accent)]">FFmpeg.wasm</span>.</span>
              </div>
              <a
                href="https://github.com/magic-peach/reframe"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-heading font-medium text-[var(--muted)] hover:text-[var(--accent)] hover:scale-[1.07] active:scale-[0.97] shadow-md bg-[var(--surface)] dark:bg-[var(--surface)] transition-all duration-200 border border-[var(--border)] github-link-3d"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.937.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10Z" />
                </svg>
                <span className="hidden sm:inline">Source on GitHub</span>
              </a>
            </footer>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
