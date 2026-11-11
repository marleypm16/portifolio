import type { Localized } from './types'

/**
 * ✏️ Edite aqui suas informações pessoais.
 * Campos vazios ('') escondem automaticamente o botão/link correspondente.
 */
export const profile = {
  name: 'Marley',
  // Nome completo exibido no rodapé/sobre. Ex.: 'Marley Silva'
  fullName: 'Marley',
  role: {
    pt: 'Desenvolvedor Full Stack',
    en: 'Full Stack Developer',
  } satisfies Localized,
  location: {
    pt: 'Brasil',
    en: 'Brazil',
  } satisfies Localized,
  languages: {
    pt: 'Português (nativo), Inglês',
    en: 'Portuguese (native), English',
  } satisfies Localized,

  // Foto: coloque o arquivo em /public (ex.: /public/profile.jpg) e use '/profile.jpg'.
  // Vazio = mostra suas iniciais.
  photo: '',

  // Currículos em PDF dentro de /public. Vazio = esconde o botão "Baixar CV".
  cv: {
    pt: '',
    en: '',
  } satisfies Localized,

  links: {
    github: 'https://github.com/marleypm16',
    linkedin: '', // ex.: 'https://www.linkedin.com/in/seu-usuario'
    email: '', // ex.: 'voce@email.com'
    whatsapp: '', // só números com DDI, ex.: '5581999999999'
  },

  // Números de destaque na seção "Sobre"
  highlights: [
    { value: '4+', label: { pt: 'Anos programando', en: 'Years coding' } },
    { value: '40+', label: { pt: 'Repositórios no GitHub', en: 'GitHub repositories' } },
    { value: '6+', label: { pt: 'Linguagens', en: 'Languages' } },
    { value: '3', label: { pt: 'Projetos em produção', en: 'Projects in production' } },
  ] satisfies { value: string; label: Localized }[],
}
