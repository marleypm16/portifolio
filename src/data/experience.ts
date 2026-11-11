import type { Localized } from './types'

export type TimelineItem = {
  title: Localized
  place: string
  period: Localized
  description?: Localized
  highlights?: Localized[]
  tags?: string[]
}

export const experience: TimelineItem[] = [
  {
    title: { pt: 'Estagiário Fullstack', en: 'Full Stack Developer Intern' },
    place: 'Interest Engenharia',
    period: { pt: 'Fevereiro 2026 — atual · Presencial', en: 'February 2026 — present · On-site' },
    highlights: [
      {
        pt: 'Eliminação de erros operacionais e retrabalho na apropriação de horas, através da digitalização completa do fluxo manual de planilhas, ao desenvolver um sistema robusto com Docker, React e FastAPI.',
        en: 'Eliminated operational errors and rework in timesheet allocation by fully digitizing a manual spreadsheet workflow, building a robust system with Docker, React and FastAPI.',
      },
      {
        pt: 'Aumento de mais de 80% na eficiência da análise técnica, reduzindo o tempo de processamento de faltas elétricas de 7 dias para apenas 1 dia, ao implementar uma aplicação de extração de dados com Python e Streamlit.',
        en: 'Increased technical analysis efficiency by over 80%, cutting electrical fault processing time from 7 days to just 1, by building a data extraction application with Python and Streamlit.',
      },
      {
        pt: 'Redução da fragmentação de processos internos, centralizando múltiplas soluções em uma plataforma única, ao liderar o desenvolvimento de um aplicativo desktop modular em Tauri, Python e Rust.',
        en: 'Reduced fragmentation of internal processes by consolidating multiple solutions into a single platform, leading the development of a modular desktop app with Tauri, Python and Rust.',
      },
    ],
    tags: ['React', 'FastAPI', 'Docker', 'Python', 'Streamlit', 'Tauri', 'Rust'],
  },
  {
    title: {
      pt: 'Bolsista de Pesquisa — Arquitetura IoT Distribuída',
      en: 'Research Fellow — Distributed IoT Architecture',
    },
    place: 'UFRPE — Jua Labs',
    period: { pt: 'Janeiro — Maio 2026 · Híbrido', en: 'January — May 2026 · Hybrid' },
    highlights: [
      {
        pt: 'Viabilização do monitoramento de sensores em tempo real, com coleta e processamento contínuo de dados de temperatura e umidade, ao projetar uma arquitetura IoT distribuída baseada em ESP32.',
        en: 'Enabled real-time sensor monitoring, with continuous collection and processing of temperature and humidity data, by designing a distributed IoT architecture based on ESP32.',
      },
      {
        pt: 'Garantia de baixa latência e alta confiabilidade na comunicação entre dispositivos, ao implementar protocolos assíncronos via MQTT com broker Mosquitto.',
        en: 'Ensured low latency and highly reliable communication between devices by implementing asynchronous messaging over MQTT with a Mosquitto broker.',
      },
      {
        pt: 'Otimização da estruturação de bases históricas, permitindo análises complexas em tempo real, ao construir um serviço consumer em Go para ingestão e tratamento de dados no InfluxDB.',
        en: 'Optimized the structure of historical data, enabling complex real-time analysis, by building a Go consumer service for data ingestion and processing into InfluxDB.',
      },
      {
        pt: 'Conversão de dados brutos em insights acionáveis, facilitando a tomada de decisão técnica, ao criar dashboards dinâmicos no Grafana.',
        en: 'Turned raw data into actionable insights that support technical decision-making by creating dynamic Grafana dashboards.',
      },
      {
        pt: 'Melhoria na escalabilidade e orquestração do sistema, garantindo um ambiente de produção consistente, ao conteinerizar todos os microsserviços com Docker.',
        en: 'Improved system scalability and orchestration, ensuring a consistent production environment, by containerizing all microservices with Docker.',
      },
    ],
    tags: ['ESP32', 'MQTT', 'Mosquitto', 'Go', 'InfluxDB', 'Grafana', 'Docker'],
  },
  {
    title: { pt: 'Desenvolvedor Front-end', en: 'Front-end Developer' },
    place: 'Sou Junior',
    period: { pt: 'Junho — Novembro 2024 · Remoto', en: 'June — November 2024 · Remote' },
    highlights: [
      {
        pt: 'Lançamento de uma plataforma de vagas (MVP) entregue dentro do prazo estabelecido, ao desenvolver a interface com ReactJS, TypeScript e Styled Components.',
        en: 'Launched a job board platform (MVP) on schedule by building the interface with ReactJS, TypeScript and Styled Components.',
      },
      {
        pt: 'Melhoria significativa na fluidez de navegação, com redução drástica no tempo de carregamento das buscas, ao migrar a lógica de filtros complexos do front-end para o back-end.',
        en: 'Significantly improved navigation smoothness, drastically reducing search loading times, by moving complex filter logic from the front-end to the back-end.',
      },
      {
        pt: 'Aumento na qualidade do código e previsibilidade de cronograma, refletido em entregas consistentes, ao liderar a equipe de front-end com code reviews e organização de sprints.',
        en: 'Raised code quality and schedule predictability, reflected in consistent deliveries, by leading the front-end team through code reviews and sprint planning.',
      },
      {
        pt: 'Otimização da retenção de usuários, alinhando objetivos de usabilidade e desempenho técnico, ao atuar diretamente nas decisões de UX/UI.',
        en: 'Improved user retention by aligning usability goals with technical performance, working directly on UX/UI decisions.',
      },
    ],
    tags: ['React', 'TypeScript', 'Styled Components','React-hook-form','Zod'],
  },
]

export const education: TimelineItem[] = [
  {
    title: { pt: 'Bacharelado em Sistemas de Informação', en: "Bachelor's in Information Systems" },
    place: 'Universidade Federal Rural de Pernambuco',
    period: { pt: '2022 — 2027', en: '2022 — 2027' },
    
  },
]
