import { useLang } from '../i18n'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

export function Skills() {
  const { t, lang } = useLang()
  return (
    <section id="skills" className="py-24">
      <div className="container-site">
        <SectionTitle eyebrow={t('skills.eyebrow')} title={t('skills.title')} />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title.en} delay={i * 0.08} className="card p-6">
              <h3 className="text-lg font-semibold text-white">{group.title[lang]}</h3>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 rounded-lg border border-slate-800 bg-ink-900/60 px-3 py-2.5 text-sm text-slate-200 transition-colors hover:border-blue-500/50"
                  >
                    <Icon size={18} color={color} aria-hidden />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
