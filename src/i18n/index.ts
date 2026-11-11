import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next, useTranslation } from 'react-i18next'
import type { Lang } from '../data/types'
import { en } from './locales/en'
import { pt } from './locales/pt'

const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' }

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { pt: { translation: pt }, en: { translation: en } },
    supportedLngs: ['pt', 'en'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
  })

const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = htmlLang[toLang(lng)]
}
syncHtmlLang(i18n.resolvedLanguage ?? 'pt')
i18n.on('languageChanged', syncHtmlLang)

function toLang(lng: string | undefined): Lang {
  return lng?.startsWith('en') ? 'en' : 'pt'
}

/** Hook com o idioma atual já normalizado ('pt' | 'en'). */
export function useLang() {
  const { t, i18n: instance } = useTranslation()
  const lang = toLang(instance.resolvedLanguage)
  const setLang = (next: Lang) => instance.changeLanguage(next)
  return { t, lang, setLang }
}

export default i18n
