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
      'Personal and team task management platform: clear ownership, collaboration, and cross-team coordination. Microservices architecture.',
    tags: ['Tanstack', 'TypeScript', 'Tailwind', 'GO', 'Microservices', 'gRPC'],
    repoUrl: 'https://github.com/rijum8906/relay',
  },
  {
    id: 'impulse-paie',
    name: 'Impulse Paie',
    description:
      'Showcase site for a firm specializing in payroll and HR administration: services overview and a way to get in touch.',
    tags: ['React', 'TypeScript', 'React Router', 'Sanity.io'],
    liveUrl: 'https://www.impulsepaie.fr/',
  },
]
