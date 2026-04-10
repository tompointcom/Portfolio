export type StackCategory = 'Front-end' | 'Outils' | 'Design' | 'Autres'

export interface StackItem {
  id: string
  symbol: string
  name: string
  level: number
  maxLevel: number
  category: StackCategory
}

/** Stub — données complètes en phase 2. */
export const stackItems: StackItem[] = []
