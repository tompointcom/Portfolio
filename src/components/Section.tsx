import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export type SectionProps = {
  id: string
  label: string
  heading: string
  children: ReactNode
}

export function Section({ id, label, heading, children }: SectionProps) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      className="border-b border-border bg-background px-4 py-16 md:px-6 md:py-24"
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.45,
        ease,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
        <h2 className="mb-8 text-lg font-semibold tracking-tight text-foreground md:text-xl">
          {heading}
        </h2>
        {children}
      </div>
    </motion.section>
  )
}
