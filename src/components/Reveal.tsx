import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = { children: ReactNode; delay?: number; className?: string }

export function Reveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
