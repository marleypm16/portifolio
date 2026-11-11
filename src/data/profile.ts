import type { Localized } from './types'


export const profile = {
  name: 'Marley',
  fullName: 'Marley Pinheiro Martins',
  role: {
    pt: 'Desenvolvedor Full Stack',
    en: 'Full Stack Developer',
  } satisfies Localized,
  location: {
    pt: 'Brasil',
    en: 'Brazil',
  } satisfies Localized,
  languages: {
    pt: 'Português (nativo), Inglês - Básico',
    en: 'Portuguese (native), English - Basic',
  } satisfies Localized,


  photo: '',

  cv: {
    pt: '',
    en: '',
  } satisfies Localized,

  links: {
    github: 'https://github.com/marleypm16',
    linkedin: 'https://www.linkedin.com/in/marley-martins-206829258/',
    email: 'marleypm16@gmail.com', 
    whatsapp: '81979133331', 
  },

  // Números de destaque na seção "Sobre"
  highlights: [
    { value: '4+', label: { pt: 'Anos programando', en: 'Years coding' } },
    { value: '40+', label: { pt: 'Repositórios no GitHub', en: 'GitHub repositories' } },
    { value: '6+', label: { pt: 'Linguagens', en: 'Languages' } },
    { value: '3', label: { pt: 'Projetos em produção', en: 'Projects in production' } },
  ] satisfies { value: string; label: Localized }[],
}
