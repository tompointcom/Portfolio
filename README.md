# Portfolio ASCII

Site vitrine (une page) de type « terminal / ASCII art », bâti avec React et Vite. Sections : en-tête, stack technique, à propos, projets, contact.

## Pile technique

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4** (plugin Vite)
- **Framer Motion** (animations)

## Prérequis

- [Node.js](https://nodejs.org/) (LTS recommandé)

## Installation

```bash
npm install
```

## Scripts

| Commande    | Rôle |
|------------|------|
| `npm run dev` | Serveur de développement (HMR) |
| `npm run build` | Vérification TypeScript + build de production (`dist/`) |
| `npm run preview` | Prévisualisation du build local |
| `npm run lint` | ESLint sur le projet |

## Personnalisation du contenu

Les textes et liens sont centralisés dans `src/data/` :

- `contact.ts` — e-mail, réseaux, etc.
- `hero.ts` — titre / intro du hero
- `about.ts` — blocs « à propos »
- `projects.ts` — cartes projets
- `stackLogos.tsx` — logos de la section stack
- `asciiDecor.ts` — art ASCII décoratif

## Structure des composants

Composants principaux dans `src/components/` : `Nav`, `Hero`, `Stack`, `About`, `Projects`, `Contact`, `Footer`. Point d’entrée de l’app : `src/App.tsx`.
