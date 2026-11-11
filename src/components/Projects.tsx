import { useState } from 'react'
import { HiArrowTopRightOnSquare, HiOutlineLockClosed } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { useLang } from '../i18n'
import { profile } from '../data/profile'
import { projects, type Project, type ProjectCategory } from '../data/projects'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

const filters = ['all', 'fullstack', 'frontend', 'backend'] as const
type Filter = (typeof filters)[number]

const coverGradient: Record<ProjectCategory, string> = {
  fullstack: 'from-blue-600 via-indigo-700 to-ink-800',
  frontend: 'from-sky-500 via-blue-700 to-ink-800',
  backend: 'from-indigo-600 via-slate-800 to-ink-800',
}

function Cover({ project }: { project: Project }) {
  if (project.image) {
    return <img src={project.image} alt={project.title} loading="lazy" className="h-44 w-full object-cover" />
  }
  return (
    <div className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br p-5 ${coverGradient[project.category]}`}>
      <div aria-hidden className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10" />
      <div aria-hidden className="absolute -right-2 -top-2 h-20 w-20 rounded-full border border-white/10" />
      <span className="font-mono text-xs text-white/60">{project.tags.slice(0, 3).join(' · ')}</span>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLang()
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-blue-500/50">
      <Cover project={project} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="shrink-0 rounded-full bg-blue-600/15 px-2.5 py-0.5 text-[11px] font-medium text-blue-300">
            {t(`projects.filters.${project.category}`)}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description[lang]}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-800 pt-4 text-sm">
          {project.repos?.map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white">
              <SiGithub /> {t('projects.code')}
              {r.label && ` (${r.label})`}
            </a>
          ))}
          {!project.repos?.length && (
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <HiOutlineLockClosed /> {t('projects.private')}
            </span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1.5 font-medium text-blue-400 hover:text-blue-300">
              {t('projects.demo')} <HiArrowTopRightOnSquare />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="border-y border-slate-800/80 bg-ink-950/60 py-24">
      <div className="container-site">
        <SectionTitle eyebrow={t('projects.eyebrow')} title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <div role="tablist" className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
              }`}
            >
              {t(`projects.filters.${f}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={`${profile.links.github}?tab=repositories`} target="_blank" rel="noreferrer" className="btn-outline">
            <SiGithub /> {t('projects.viewAll')}
          </a>
        </div>
      </div>
    </section>
  )
}
