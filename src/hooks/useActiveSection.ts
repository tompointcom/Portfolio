import { useEffect, useRef, useState } from 'react'

const DEFAULT_IDS = ['about', 'projects', 'contact'] as const

const THRESHOLDS = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] as const

function pickMostVisible(
  sectionIds: readonly string[],
  ratios: ReadonlyMap<string, number>,
): string | null {
  let best = 0
  let bestId: string | null = null
  for (const id of sectionIds) {
    const r = ratios.get(id) ?? 0
    if (r > best) {
      best = r
      bestId = id
    }
  }
  return best < 0.02 ? null : bestId
}

export type UseActiveSectionOptions = {
  sectionIds?: readonly string[]
}

export function useActiveSection(
  options?: UseActiveSectionOptions,
): string | null {
  const sectionIds = options?.sectionIds ?? DEFAULT_IDS
  const [active, setActive] = useState<string | null>(null)
  const ratiosRef = useRef<Map<string, number>>(new Map())

  useEffect(() => {
    ratiosRef.current = new Map()
    const ids = sectionIds

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.target.id) continue
          ratiosRef.current.set(e.target.id, e.intersectionRatio)
        }
        setActive(pickMostVisible(ids, ratiosRef.current))
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: [...THRESHOLDS] },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => {
      observer.disconnect()
      ratiosRef.current = new Map()
    }
  }, [sectionIds])

  return active
}
