# Portfólio — Marley

Portfólio pessoal bilíngue (🇧🇷 PT / 🇺🇸 EN) feito com **React + TypeScript + Vite + Tailwind CSS**, pronto para deploy na **Vercel**.

Seções: Hero · Sobre · Stacks · Projetos (com filtro) · Experiência & Formação · Contato.

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção: `npm run build` (saída em `dist/`).

## Editando o conteúdo

Todo o conteúdo fica em `src/data/` — não é preciso mexer nos componentes:

| Arquivo | O que editar |
| --- | --- |
| `src/data/profile.ts` | Nome, cargo, localização, foto, CVs, links (GitHub, LinkedIn, e-mail, WhatsApp) e números de destaque. Campos vazios escondem o botão correspondente. |
| `src/data/skills.ts` | Tecnologias por categoria e ícones do topo. Ícones vêm de [react-icons](https://react-icons.github.io/react-icons/). |
| `src/data/projects.ts` | Projetos: descrição PT/EN, tags, categoria, links de código/demo e screenshot opcional. |
| `src/data/experience.ts` | Experiências e formação (PT/EN). **Os itens atuais são exemplos — substitua.** |
| `src/i18n/locales/pt.ts` / `en.ts` | Textos da interface (títulos, botões, “sobre mim”). |

Arquivos estáticos (foto, PDFs do currículo, screenshots dos projetos) vão em `public/`:

- Foto: `public/profile.jpg` → em `profile.ts` use `photo: '/profile.jpg'`
- CV: `public/cv-pt.pdf` e `public/cv-en.pdf` → `cv: { pt: '/cv-pt.pdf', en: '/cv-en.pdf' }`
- Screenshot: `public/projects/gestauto.png` → no projeto use `image: '/projects/gestauto.png'`

## Idiomas

O idioma é detectado pelo navegador, pode ser trocado no botão PT/EN do menu e fica salvo. Também dá para forçar pela URL: `?lang=en` ou `?lang=pt` (útil para mandar o link em inglês para vagas internacionais).

## Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório `marleypm16/portifolio`.
2. A Vercel detecta **Vite** automaticamente (build `npm run build`, output `dist`).
3. Clique em **Deploy**. Cada push na branch principal gera um novo deploy.
