import type { Localized } from './types'

export type TimelineItem = {
  title: Localized
  place: string
  period: Localized
  description: Localized
  tags?: string[]
}

/**
 * ✏️ Substitua pelos seus dados reais.
 * Os itens abaixo são exemplos para mostrar o formato.
 */
export const experience: TimelineItem[] = [
  {
    title: { pt: 'Desenvolvedor Full Stack (Freelancer)', en: 'Full Stack Developer (Freelance)' },
    place: 'Autônomo',
    period: { pt: '2024 — atual', en: '2024 — present' },
    description: {
      pt: 'Desenvolvimento de aplicações web sob demanda, como o GestAuto e o Smart Menu, do levantamento de requisitos ao deploy.',
      en: 'Building custom web applications such as GestAuto and Smart Menu, from requirements gathering to deployment.',
    },
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: { pt: 'Estagiário de Desenvolvimento', en: 'Software Development Intern' },
    place: 'Empresa (edite em src/data/experience.ts)',
    period: { pt: '2025', en: '2025' },
    description: {
      pt: 'Descreva aqui suas responsabilidades e resultados.',
      en: 'Describe your responsibilities and results here.',
    },
    tags: ['Python', 'FastAPI'],
  },
]

export const education: TimelineItem[] = [
  {
    title: { pt: 'Bacharelado em Sistemas de Informação', en: "Bachelor's in Information Systems" },
    place: 'Universidade (edite em src/data/experience.ts)',
    period: { pt: '2022 — 2026', en: '2022 — 2026' },
    description: {
      pt: 'Formação em engenharia de software, banco de dados, algoritmos e gestão de projetos.',
      en: 'Coursework in software engineering, databases, algorithms and project management.',
    },
  },
]
