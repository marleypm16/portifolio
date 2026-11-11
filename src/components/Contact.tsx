import { HiOutlineEnvelope } from 'react-icons/hi2'
import { SiGithub, SiWhatsapp } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
import { useLang } from '../i18n'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

export function Contact() {
  const { t } = useLang()
  const { links } = profile

  return (
    <section id="contact" className="py-24">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-700/30 via-ink-800 to-ink-800 px-6 py-14 text-center sm:px-12">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <p className="eyebrow relative">{t('contact.eyebrow')}</p>
          <h2 className="relative mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-slate-300">{t('contact.text')}</p>

          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            {links.email && (
              <a href={`mailto:${links.email}`} className="btn-primary">
                <HiOutlineEnvelope size={18} /> {t('contact.email')}
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer" className={links.email ? 'btn-outline' : 'btn-primary'}>
                <FaLinkedinIn /> LinkedIn
              </a>
            )}
            {links.whatsapp && (
              <a href={`https://wa.me/${links.whatsapp}`} target="_blank" rel="noreferrer" className="btn-outline">
                <SiWhatsapp /> WhatsApp
              </a>
            )}
            <a href={links.github} target="_blank" rel="noreferrer" className={links.email || links.linkedin ? 'btn-outline' : 'btn-primary'}>
              <SiGithub /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
