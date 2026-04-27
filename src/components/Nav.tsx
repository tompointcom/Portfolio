import { useCallback, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_LINKS = [
  { sectionId: 'about', label: './about' },
  { sectionId: 'projects', label: './projects' },
  { sectionId: 'contact', label: './contact' },
] as const

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  const handleNavigate = useCallback((sectionId: string) => {
    scrollToSection(sectionId)
    setMenuOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a
          href="#"
          className="text-sm font-bold uppercase tracking-[0.15em] text-foreground"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          TC_
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map(({ sectionId, label }) => (
            <button
              key={sectionId}
              type="button"
              className={`nav-link cursor-pointer border-0 bg-transparent p-0 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground ${activeSection === sectionId ? 'nav-link-active' : ''}`}
              onClick={() => handleNavigate(sectionId)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-transparent p-0 text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="square"
              aria-hidden
            >
              <path d="M5 5L19 19M19 5L5 19" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="square"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className="border-t border-border bg-background md:hidden"
        hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4 py-3">
          {NAV_LINKS.map(({ sectionId, label }) => (
            <li key={sectionId}>
              <button
                type="button"
                className={`nav-link w-full cursor-pointer border-0 bg-transparent py-3 text-left text-[10px] font-medium uppercase tracking-[0.2em] text-foreground ${activeSection === sectionId ? 'nav-link-active' : ''}`}
                onClick={() => handleNavigate(sectionId)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
