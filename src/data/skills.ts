import type { IconType } from 'react-icons'
import {
  SiCss,
  SiDocker,
  SiFastify,
  SiFastapi,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import type { Localized } from './types'

export type Skill = { name: string; icon: IconType; color: string }
export type SkillGroup = { title: Localized; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: { pt: 'Front-end', en: 'Front-end' },
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    title: { pt: 'Back-end', en: 'Back-end' },
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Fastify', icon: SiFastify, color: '#FFFFFF' },
      { name: 'Java', icon: SiOpenjdk, color: '#F89820' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
    ],
  },
  {
    title: { pt: 'Banco de dados & DevOps', en: 'Databases & DevOps' },
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Prisma', icon: SiPrisma, color: '#FFFFFF' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
]

/** Ícones exibidos no topo (hero). */
export const heroStack: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Java', icon: SiOpenjdk, color: '#F89820' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Go', icon: SiGo, color: '#00ADD8' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
]
