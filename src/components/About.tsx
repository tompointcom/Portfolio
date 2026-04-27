import { motion, useReducedMotion } from 'framer-motion'
import { aboutCopy } from '../data/about'
import { Section } from './Section'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function About() {
  const reduced = useReducedMotion()

  return (
    <Section id="about" label="01 // ABOUT" heading={aboutCopy.title}>
      <motion.div
        className="space-y-6"
        initial={reduced ? 'visible' : 'hidden'}
        whileInView={reduced ? undefined : 'visible'}
        animate={reduced ? 'visible' : undefined}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: reduced ? 0 : 0.09, delayChildren: 0.02 },
          },
        }}
      >
        {aboutCopy.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: reduced ? 0 : 0.4, ease },
              },
            }}
            className="max-w-2xl text-sm leading-relaxed text-secondary md:text-base"
          >
            {paragraph}
          </motion.p>
        ))}
        <motion.ul
          variants={{
            hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: reduced ? 0 : 0.4, ease },
            },
          }}
          className="max-w-2xl space-y-2 border border-border border-dashed p-4 text-xs text-secondary md:text-sm"
        >
          {aboutCopy.highlights.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-muted" aria-hidden>
                {'>'}
              </span>
              <span>{line}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </Section>
  )
}
