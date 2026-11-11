import { useEffect, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { useLang } from '../i18n'
import { profile } from '../data/profile'
import type { Lang } from '../data/types'

const sections = ['about', 'skills', 'projects', 'experience', 'contact'] as const

function LangToggle({ lang, setLang, label }: { lang: Lang; setLang: (l: Lang) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex rounded-lg border border-slate-700 p-0.5 text-xs font-semibold">
      {(['pt', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md px-2.5 py-1 uppercase transition-colors ${
            lang === l ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ['top', ...sections]) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-slate-800 bg-ink-900/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between">
        <a href="#top" className="leading-tight">
          <span className="text-lg font-bold text-white">
            {profile.name}
            <span className="text-blue-500">.</span>
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400">
            {profile.role[lang]}
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative py-1 transition-colors hover:text-white ${
                  active === id ? 'text-white' : 'text-slate-400'
                }`}
              >
                {t(`nav.${id}`)}
                {active === id && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-blue-500" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle lang={lang} setLang={setLang} label={t('nav.language')} />
          <a href="#contact" className="btn-primary px-4 py-2">
            {t('nav.hire')}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangToggle lang={lang} setLang={setLang} label={t('nav.language')} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t('nav.menu')}
            aria-expanded={open}
            className="rounded-lg p-2 text-slate-200 hover:bg-slate-800"
          >
            {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container-site flex flex-col gap-1 pb-4 md:hidden">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
