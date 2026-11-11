import type { IconType } from 'react-icons'
import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi2'
import { useLang } from '../i18n'
import { education, experience, type TimelineItem } from '../data/experience'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

function Timeline({ title, icon: Icon, items }: { title: string; icon: IconType; items: TimelineItem[] }) {
  const { lang } = useLang()
  return (
    <Reveal>
      <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600/15 text-blue-400">
          <Icon size={20} />
        </span>
        {title}
      </h3>
      <ol className="relative ml-5 space-y-8 border-l border-slate-800 pl-8">
        {items.map((item) => (
          <li key={item.title.en + item.place} className="relative">
            <span className="absolute -left-[2.37rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-ink-900" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">{item.period[lang]}</p>
            <h4 className="mt-1 text-lg font-semibold text-white">{item.title[lang]}</h4>
            <p className="text-sm text-slate-300">{item.place}</p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description[lang]}</p>
            )}
            {item.highlights && (
              <ul className="mt-3 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h.en} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70" aria-hidden />
                    <span>{h[lang]}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.tags && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

export function Experience() {
  const { t } = useLang()
  return (
    <section id="experience" className="py-24">
      <div className="container-site">
        <SectionTitle eyebrow={t('experience.eyebrow')} title={t('experience.title')} />
        <div className="grid gap-14 lg:grid-cols-2">
          <Timeline title={t('experience.work')} icon={HiOutlineBriefcase} items={experience} />
          <Timeline title={t('experience.education')} icon={HiOutlineAcademicCap} items={education} />
        </div>
      </div>
    </section>
  )
}
