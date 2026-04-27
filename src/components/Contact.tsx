import { motion, useReducedMotion } from 'framer-motion'
import { contactCopy } from '../data/contact'
import { Section } from './Section'

const linkButtonClass =
  'inline-flex border border-border bg-transparent px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function Contact() {
  const reduced = useReducedMotion()
  const linkHover = reduced
    ? undefined
    : { y: -2, boxShadow: '0 4px 28px rgba(255, 255, 255, 0.1)' }

  return (
    <Section id="contact" label="03 // CONTACT" heading={contactCopy.title}>
      <div className="space-y-8">
        <p className="max-w-xl text-sm leading-relaxed text-secondary md:text-base">{contactCopy.intro}</p>
        <div className="flex flex-wrap gap-3">
          <motion.a
            href={`mailto:${contactCopy.email}`}
            className={linkButtonClass}
            whileTap={{ scale: 0.97 }}
            whileHover={linkHover}
            transition={{ duration: 0.2, ease }}
          >
            [{contactCopy.email}]
          </motion.a>
          <motion.a
            href={contactCopy.githubUrl}
            className={linkButtonClass}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            whileHover={linkHover}
            transition={{ duration: 0.2, ease }}
          >
            [github]
          </motion.a>
          <motion.a
            href={contactCopy.linkedinUrl}
            className={linkButtonClass}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            whileHover={linkHover}
            transition={{ duration: 0.2, ease }}
          >
            [linkedin]
          </motion.a>
        </div>
      </div>
    </Section>
  )
}
