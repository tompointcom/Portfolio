import { motion } from 'framer-motion'
import { heroAsciiBackground } from '../data/asciiDecor'
import { heroCopy } from '../data/hero'
import { useTypingEffect } from '../hooks/useTypingEffect'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function Hero() {
  const { displayedText } = useTypingEffect(heroCopy.description, {
    msPerChar: 15,
  })

  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-4 py-20 md:px-6 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-40"
        aria-hidden
      >
        <pre className="max-h-full max-w-[min(100%,56rem)] select-none whitespace-pre-wrap break-all p-4 text-[5px] leading-tight text-border-subtle sm:text-[6px] md:text-[7px]">
          {heroAsciiBackground}
        </pre>
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-secondary"
        >
          {heroCopy.label}
        </motion.p>

        <motion.div variants={itemVariants} className="mb-4 flex flex-wrap items-baseline gap-2">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            {heroCopy.name}
          </h1>
          <span
            className="hero-cursor-blink text-4xl font-bold leading-none text-foreground md:text-5xl"
            aria-hidden
          >
            █
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-6 text-sm font-normal tracking-tight text-secondary"
        >
          {heroCopy.subtitle}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-2xl text-sm leading-relaxed text-secondary md:text-base"
        >
          {displayedText}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3"
        >
          <motion.button
            type="button"
            className="border border-border bg-transparent px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('projects')}
          >
            [{heroCopy.primaryCta}]
          </motion.button>
          <motion.button
            type="button"
            className="border border-border bg-transparent px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('contact')}
          >
            [{heroCopy.secondaryCta}]
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
