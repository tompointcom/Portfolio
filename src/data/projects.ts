export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'relay',
    name: 'Relay',
    description:
      'Plateforme de gestion de tâches personnelles et d’équipe : ownership clair, collaboration et coordination inter-équipes. Architecture microservices.',
    tags: ['Tanstack', 'TypeScript', 'Tailwind', 'GO', 'Microservices', 'gRPC'],
    repoUrl: 'https://github.com/rijum8906/relay',
  },
  {
    id: 'impulse-paie',
    name: 'Impulse Paie',
    description:
      'Site vitrine pour un cabinet expert en gestion de la paie et administration du personnel : présentation de l’offre et prise de contact.',
    tags: ['React', 'TypeScript', 'React Router', 'Sanity.io'],
    liveUrl: 'https://www.impulsepaie.fr/',
  },
]
