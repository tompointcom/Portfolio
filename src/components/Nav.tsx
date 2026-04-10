import { useCallback, useState } from 'react'

const NAV_LINKS = [
  { sectionId: 'about', label: './about' },
  { sectionId: 'projects', label: './projects' },
  { sectionId: 'stack', label: './stack' },
  { sectionId: 'contact', label: './contact' },
] as const

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

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
              className="nav-link cursor-pointer border-0 bg-transparent p-0 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground"
              onClick={() => handleNavigate(sectionId)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border bg-transparent md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-px w-5 bg-foreground transition-transform ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
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
                className="nav-link w-full cursor-pointer border-0 bg-transparent py-3 text-left text-[10px] font-medium uppercase tracking-[0.2em] text-foreground"
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
