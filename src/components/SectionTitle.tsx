import { Reveal } from './Reveal'

type Props = { eyebrow: string; title: string; subtitle?: string }

export function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-blue-500" aria-hidden />
      {subtitle && <p className="mt-5 text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
