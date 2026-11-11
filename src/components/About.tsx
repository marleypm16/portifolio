import type { IconType } from 'react-icons'
import { HiOutlineEnvelope, HiOutlineGlobeAlt, HiOutlineMapPin } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { useLang } from '../i18n'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

type InfoRow = { icon: IconType; label: string; value: string; href?: string }

export function About() {
  const { t, lang } = useLang()
  const { links } = profile

  const info: InfoRow[] = [
    { icon: HiOutlineMapPin, label: t('about.location'), value: profile.location[lang] },
    ...(links.email
      ? [{ icon: HiOutlineEnvelope, label: t('about.email'), value: links.email, href: `mailto:${links.email}` }]
      : []),
    {
      icon: SiGithub,
      label: t('about.github'),
      value: links.github.replace('https://', ''),
      href: links.github,
    },
    { icon: HiOutlineGlobeAlt, label: t('about.languages'), value: profile.languages[lang] },
  ]

  return (
    <section id="about" className="border-y border-slate-800/80 bg-ink-950/60 py-24">
      <div className="container-site grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('about.title')}</h2>
          <p className="mt-6 leading-relaxed text-slate-400">{t('about.p1')}</p>
          <p className="mt-4 leading-relaxed text-slate-400">{t('about.p2')}</p>
          <p className="mt-4 leading-relaxed text-slate-400">{t('about.p3')}</p>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.highlights.map((h) => (
              <div key={h.value + h.label.en} className="card p-4">
                <dt className="sr-only">{h.label[lang]}</dt>
                <dd className="text-2xl font-bold text-white">{h.value}</dd>
                <dd className="mt-1 text-xs text-slate-400">{h.label[lang]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="card divide-y divide-slate-800 p-2">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-600/15 text-blue-400">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="block truncate text-sm text-slate-400 hover:text-blue-400">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-400">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
