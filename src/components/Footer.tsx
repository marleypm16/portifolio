import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { useLang } from '../i18n'
import { profile } from '../data/profile'

export function Footer() {
  const { t, lang } = useLang()
  const { links } = profile
  const social = [
    { href: links.github, label: 'GitHub', icon: SiGithub },
    { href: links.linkedin, label: 'LinkedIn', icon: FaLinkedinIn },
    { href: links.email && `mailto:${links.email}`, label: 'Email', icon: HiOutlineEnvelope },
  ].filter((s) => s.href)

  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-site flex flex-col items-center justify-between gap-5 text-sm text-slate-500 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">
            {profile.name}
            <span className="text-blue-500">.</span> <span className="font-normal text-slate-400">{profile.role[lang]}</span>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} {profile.fullName}. {t('footer.rights')} {t('footer.built')}
          </p>
        </div>
        <ul className="flex gap-2">
          {social.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-800 text-slate-300 hover:border-blue-500 hover:text-white"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
