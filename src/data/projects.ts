import type { Localized } from './types'

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack'

export type Project = {
  title: string
  description: Localized
  tags: string[]
  category: ProjectCategory
  /** Links de código. Use label para diferenciar (ex.: 'API', 'Web'). Omita para repositórios privados. */
  repos?: { label?: string; url: string }[]
  demo?: string
  /** Screenshot em /public/projects (ex.: '/projects/gestauto.png'). Vazio = capa gerada. */
  image?: string
}

const gh = (repo: string) => `https://github.com/marleypm16/${repo}`

export const projects: Project[] = [
  {
    title: 'GestAuto',
    description: {
      pt: 'SaaS de gestão para estéticas automotivas e oficinas: clientes, agendamentos, orçamentos, pós-venda, módulo financeiro e dashboards personalizáveis, com autenticação JWT e multi-filial.',
      en: 'Management SaaS for car detailing shops and garages: customers, scheduling, quotes, after-sales, finance module and customizable dashboards, with JWT auth and multi-branch support.',
    },
    tags: ['TypeScript', 'Fastify', 'Prisma', 'PostgreSQL', 'Zod', 'Docker'],
    category: 'fullstack',
    repos: [{ url: gh('gestauto') }],
    demo: 'https://plataformaeixo.vercel.app',
  },
  {
    title: 'Order Services',
    description: {
      pt: 'Arquitetura orientada a eventos com dois microsserviços: API de pedidos publica eventos no RabbitMQ (topic exchange) e um worker envia notificações. Orquestrado com Docker Compose.',
      en: 'Event-driven architecture with two microservices: an orders API publishes events to RabbitMQ (topic exchange) and a worker sends notifications. Orchestrated with Docker Compose.',
    },
    tags: ['Java 21', 'Spring Boot 3', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    category: 'backend',
    repos: [{ url: gh('order-services') }],
  },
  {
    title: 'Soiltune Server',
    description: {
      pt: 'Backend IoT em Go: consome telemetria de sensores via MQTT, grava séries temporais no InfluxDB (visualizadas no Grafana) e expõe uma API HTTP autenticada para enviar comandos aos dispositivos.',
      en: 'Go IoT backend: consumes sensor telemetry over MQTT, stores time series in InfluxDB (visualized in Grafana) and exposes an authenticated HTTP API to send commands to devices.',
    },
    tags: ['Go', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
    category: 'backend',
    repos: [{ url: gh('soiltune-server') }],
  },
  {
    title: 'Smart Menu',
    description: {
      pt: 'Cardápio digital para restaurantes: os clientes acessam o menu pelo celular e o estabelecimento gerencia produtos e categorias em um painel.',
      en: 'Digital menu for restaurants: customers browse the menu on their phones while the business manages products and categories from a dashboard.',
    },
    tags: ['TypeScript', 'React'],
    category: 'fullstack',
  },
  {
    title: 'Banco de Horas',
    description: {
      pt: 'Sistema de controle de banco de horas de funcionários: front-end em Next.js com formulários validados e API REST em Spring Boot com migrações Flyway.',
      en: 'Employee time-bank tracking system: Next.js front-end with validated forms and a Spring Boot REST API with Flyway migrations.',
    },
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Java', 'Spring Boot', 'PostgreSQL'],
    category: 'fullstack',
    repos: [
      { label: 'Web', url: gh('web-banco-de-horas') },
      { label: 'API', url: gh('banco-de-horas-api') },
    ],
  },
  {
    title: 'Obrigações Acessórias API',
    description: {
      pt: 'API REST para cadastro de empresas e gestão das suas obrigações acessórias (declarações enviadas ao governo), com testes automatizados.',
      en: 'REST API to register companies and manage their tax compliance filings sent to the government, with automated tests.',
    },
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Pytest'],
    category: 'backend',
    repos: [{ url: gh('estagio-dev-dcifre') }],
  },
  {
    title: 'Eixo — Landing Page',
    description: {
      pt: 'Landing page de apresentação da plataforma Eixo, responsiva e focada em conversão.',
      en: 'Responsive, conversion-focused landing page for the Eixo platform.',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    demo: 'https://eixo-landing-page.vercel.app',
  },
  {
    title: 'Desafio Itaú — Transações',
    description: {
      pt: 'API REST de transações e estatísticas em tempo real, construída com Spring Boot.',
      en: 'REST API for transactions and real-time statistics, built with Spring Boot.',
    },
    tags: ['Java', 'Spring Boot'],
    category: 'backend',
    repos: [{ url: gh('desafio-itau-junior') }],
  },
  {
    title: 'Sistema de Canhotos',
    description: {
      pt: 'Aplicação web para controle e registro de canhotos de notas fiscais.',
      en: 'Web app to track and record invoice delivery receipts.',
    },
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'frontend',
    repos: [{ url: gh('Sistema-de-canhotos') }],
    demo: 'https://sistema-de-canhotos.vercel.app',
  },
]
