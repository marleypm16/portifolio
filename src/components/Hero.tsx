import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowDownTray, HiArrowRight, HiOutlineEnvelope } from 'react-icons/hi2'
import { useLang } from '../i18n'
import { profile } from '../data/profile'
import { heroStack } from '../data/skills'



export function Hero() {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const cv = profile.cv[lang]

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {t('hero.available')}
          </span>
          <p className="mt-6 text-lg font-medium text-blue-400">{t('hero.greeting')}</p>
          <h1 className="mt-1 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            {profile.fullName}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-slate-200 sm:text-3xl">{profile.role[lang]}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{t('hero.tagline')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              {t('hero.ctaProjects')} <HiArrowRight />
            </a>
            {cv ? (
              <a href={cv} download className="btn-outline">
                {t('hero.ctaCv')} <HiArrowDownTray />
              </a>
            ) : (
              <a href="#contact" className="btn-outline">
                <HiOutlineEnvelope /> {t('hero.ctaContact')}
              </a>
            )}
          </div>

          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {t('hero.stackLabel')}
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {heroStack.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                title={name}
                className="grid h-11 w-11 place-items-center rounded-lg border border-slate-800 bg-ink-800 transition-transform hover:-translate-y-0.5"
              >
                <Icon size={22} color={color} aria-label={name} />
              </li>
            ))}
          </ul>
        </motion.div>

        
      </div>
    </section>
  )
}
