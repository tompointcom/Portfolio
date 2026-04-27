import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'
import { projects } from '../data/projects'
import { Section } from './Section'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const linkClass =
  'inline-flex border border-border bg-transparent px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background'

export function Projects() {
  const reduced = useReducedMotion()

  const containerVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: reduced ? 0 : 0.09 },
      },
    }),
    [reduced],
  )

  const itemVariants = useMemo(
    () => ({
      hidden: reduced
        ? { opacity: 1, y: 0 }
        : {
            opacity: 0,
            y: 14,
          },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduced ? 0 : 0.42, ease },
      },
    }),
    [reduced],
  )

  const cardHover = reduced
    ? undefined
    : { y: -3, boxShadow: '0 6px 32px rgba(255, 255, 255, 0.08)' }

  return (
    <Section id="projects" label="02 // PROJECTS" heading="Projets récents">
      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className="flex flex-col border border-border bg-background p-5"
            whileHover={cardHover}
            transition={{ duration: 0.2, ease }}
          >
            <h3 className="mb-3 text-base font-semibold tracking-tight text-foreground">{project.name}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-secondary">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.repoUrl ? (
                <a href={project.repoUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
                  [github]
                </a>
              ) : null}
              {project.liveUrl ? (
                <a href={project.liveUrl} className={linkClass} target="_blank" rel="noopener noreferrer">
                  [demo]
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
