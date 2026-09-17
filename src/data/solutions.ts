export const solutionNavGroups = [
  {
    label: 'Use cases',
    items: [
      ['Service feedback', '/solutions/service-feedback'],
      ['Employee listening', '/solutions/employee-listening'],
      ['Consultation & co-production', '/solutions/consultation'],
      ['Qualitative research', '/solutions/qualitative-research'],
    ],
  },
  {
    label: 'Industries',
    items: [
      ['Charities & non-profits', '/solutions/charities'],
      ['Healthcare & social support', '/solutions/healthcare'],
      ['Universities & research', '/solutions/universities'],
      ['Business', '/solutions/business'],
      ['Local government', '/solutions/local-government'],
    ],
  },
] as const

export const solutionPages = {
  'service-feedback': {
    eyebrow: 'Use case',
    title: 'Understand the people using your services.',
    intro: 'Collect open feedback from patients, residents and service users without forcing every experience into a preset answer.',
    points: ['Ask open questions at the right moment', 'See which experiences resonate across participants', 'Keep themes connected to the words behind them'],
  },
  'employee-listening': {
    eyebrow: 'Use case',
    title: 'Hear what employees are actually experiencing.',
    intro: 'Give people room to explain what helps, what gets in the way and what should change across teams.',
    points: ['Move beyond engagement scores', 'Recognise shared experiences across teams', 'Turn open responses into reviewable themes'],
  },
  consultation: {
    eyebrow: 'Use case',
    title: 'Make consultation more open and useful.',
    intro: 'Bring public engagement, stakeholder feedback and co-production into a process built around what people say.',
    points: ['Leave room for unexpected priorities', 'Help participants recognise shared concerns', 'Report findings with source evidence attached'],
  },
  'qualitative-research': {
    eyebrow: 'Use case',
    title: 'Conduct qualitative research at scale.',
    intro: 'Organise large volumes of open-text feedback while keeping the original responses available for human review.',
    points: ['Collect detailed open responses', 'Code and develop themes', 'Compare participant groups with optional AI assistance'],
  },
  charities: {
    eyebrow: 'Industry',
    title: 'Listening for charities and non-profits.',
    intro: 'Understand supporters, beneficiaries and volunteers through open feedback that keeps lived experience intact.',
    points: ['Support meaningful participation', 'Identify shared and less visible experiences', 'Connect insight to service and programme decisions'],
  },
  healthcare: {
    eyebrow: 'Industry',
    title: 'Listening across healthcare and social support.',
    intro: 'Collect lived-experience feedback for service improvement, engagement and inclusive co-production.',
    points: ['Hear patients and service users in their own words', 'Recognise patterns across different groups', 'Keep human judgement central to analysis'],
  },
  universities: {
    eyebrow: 'Industry',
    title: 'Qualitative surveys for universities and researchers.',
    intro: 'Run participatory research and open-text studies without flattening nuanced answers into fixed categories.',
    points: ['Support exploratory research questions', 'Analyse themes while retaining source material', 'Compare cohorts or participant groups'],
  },
  business: {
    eyebrow: 'Industry',
    title: 'Understand employees, customers and stakeholders.',
    intro: 'Use open questions to uncover the detail behind experience scores, strategic priorities and organisational change.',
    points: ['Collect richer employee and customer feedback', 'See what resonates across a group', 'Turn findings into clear next steps'],
  },
  'local-government': {
    eyebrow: 'Industry',
    title: 'Better listening for local government.',
    intro: 'Give residents and communities space to explain their priorities, concerns and experiences of local services.',
    points: ['Run open consultation and engagement', 'Understand different community experiences', 'Report themes with evidence people can inspect'],
  },
} as const

export type SolutionSlug = keyof typeof solutionPages
