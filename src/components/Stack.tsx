import { useReducedMotion } from 'framer-motion'
import { stackMarqueeItems } from '../data/stackLogos'

const logoClassName = 'h-7 w-auto max-h-8 text-foreground opacity-90 md:h-8'

function LogoStrip({ suffix, decorative }: { suffix: string; decorative?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-12 px-8 md:gap-16 md:px-10">
      {stackMarqueeItems.map(({ id, name, Logo }) => (
        <div key={`${id}-${suffix}`} className="flex shrink-0 items-center justify-center" title={name}>
          {!decorative ? <span className="sr-only">{name}</span> : null}
          <Logo className={logoClassName} />
        </div>
      ))}
    </div>
  )
}

export function Stack() {
  const reduced = useReducedMotion()

  return (
    <section id="stack" aria-label="Stack technique" className="border-b border-border bg-background py-6 md:py-7">
      {reduced ? (
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 md:gap-x-16">
          {stackMarqueeItems.map(({ id, name, Logo }) => (
            <div key={id} className="flex items-center justify-center text-foreground" title={name}>
              <span className="sr-only">{name}</span>
              <Logo className={logoClassName} />
            </div>
          ))}
        </div>
      ) : (
        <div className="stack-wrap overflow-hidden" aria-hidden="true">
          <div className="stack-marquee-track flex w-max">
            <LogoStrip suffix="a" decorative />
            <LogoStrip suffix="b" decorative />
          </div>
        </div>
      )}
    </section>
  )
}
