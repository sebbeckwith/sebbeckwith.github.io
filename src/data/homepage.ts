export const navItems = [
  ['Product', '#product'],
  ['How it works', '#how-it-works'],
  ['Solutions', '#uses'],
  ['Pricing', '#pricing'],
  ['Resources', '#faq'],
] as const

export const journey = [
  { number: '01', title: 'Ask openly', text: 'Start with an open question and let people answer in their own words.' },
  { number: '02', title: 'Find shared experience', text: 'Surface relevant answers so people can show what reflects their experience.' },
  { number: '03', title: 'Analyse the themes', text: 'Code responses, develop themes and compare participant groups, with optional AI assistance.' },
  { number: '04', title: 'Report and act', text: 'Review the source evidence, communicate what you learned and decide what happens next.' },
] as const

export const differentiators = [
  { index: 'A', title: 'Open questions + answers', text: 'Ask openly and hear answers you did not write first. People respond in their own words, making room for context, unexpected issues and ideas predefined options may miss.' },
  { index: 'B', title: 'Peer analysis', text: 'See what resonates across the group. Relevant answers can be surfaced as people respond, helping participants recognise and validate shared experiences.' },
  { index: 'C', title: 'Thematic analysis', text: 'Turn hundreds of answers into themes you can inspect. Code responses, review source evidence and compare groups, with optional AI assistance and human judgement in control.' },
] as const

export const useCases = [
  { number: '01', title: 'Understand people using services', text: 'Collect lived-experience feedback from patients, residents and service users without forcing every answer into a preset category.' },
  { number: '02', title: 'Hear what employees are experiencing', text: 'Ask open-ended employee survey questions and see which experiences resonate across teams.' },
  { number: '03', title: 'Run consultation and co-production', text: 'Bring public engagement and stakeholder feedback into a process where shared priorities can emerge.' },
  { number: '04', title: 'Conduct qualitative research at scale', text: 'Organise open-text feedback for qualitative and thematic analysis while keeping source responses reviewable.' },
] as const

export const sectorSolutions = [
  { icon: 'charities', title: 'Charities & non-profits', description: 'Understand supporters, beneficiaries and volunteers through open feedback that keeps lived experience intact.', linkLabel: 'Explore social impact' },
  { icon: 'healthcare', title: 'Healthcare, social support & public sector', description: 'Empower voice for service improvement, inclusive co-production and decisions grounded in real experience.', linkLabel: 'Explore healthcare' },
  { icon: 'research', title: 'Researchers & universities', description: 'Run participatory research, mixed-method studies and ethical qualitative analysis without flattening nuance.', linkLabel: 'Explore academia' },
  { icon: 'business', title: 'Business & not-for-profit sectors', description: 'Hear stakeholder voices, test priorities and connect qualitative evidence to strategy and reporting.', linkLabel: 'Explore organisations' },
  { icon: 'government', title: 'Local government & communities', description: 'Make better decisions with citizen insight, accessible consultation and a clearer view of shared priorities.', linkLabel: 'Explore communities' },
] as const

export const caseStudyPlaceholder = {
  label: 'Illustrative customer story · awaiting approval',
  organisation: 'Post Office',
  quote: 'Gobby helped us hear the detail behind the numbers and identify where people’s experiences overlapped without losing the context in their own words.',
  context: 'Illustrative layout copy only. Replace this with an approved project summary and verified outcomes before publication.',
  attribution: 'Post Office project team · Placeholder attribution',
} as const

export const faqs = [
  ['What is Gobby?', 'Gobby is qualitative survey software for collecting open-text answers, surfacing shared experiences through peer analysis and organising qualitative feedback into clear, inspectable themes.'],
  ['What is a qualitative survey?', 'A qualitative survey uses open questions to let people explain what they think, experience or prioritise in their own words. It is useful when context and unexpected answers matter.'],
  ['How is Gobby different from a normal survey tool?', 'Many survey tools focus on predefined answer choices and summary scores. Gobby brings open answers, peer analysis and thematic analysis together while keeping source evidence available for review.'],
  ['How do open questions work in Gobby?', 'You ask a question without deciding every possible answer in advance. Participants write their own response, creating room for nuance, context and issues the question writer may not have anticipated.'],
  ['What is peer analysis?', 'Peer analysis helps show what resonates across a group. Gobby can surface relevant answers from other participants so people can recognise and validate experiences that reflect their own.'],
  ['What is thematic analysis?', 'Thematic analysis involves coding qualitative responses, organising related codes into themes and reviewing the evidence behind those themes to understand patterns across the research.'],
  ['How does AI-assisted analysis work?', 'Optional AI assistance can help identify and organise possible themes. People still review the original responses, refine the analysis and decide what the findings mean.'],
  ['Can Gobby compare participant groups?', 'Gobby can support comparison of themes across demographic or participant groups, helping teams see where experiences align and where smaller patterns may differ from the overall picture.'],
  ['Is AI required?', 'No. AI is an optional support layer within analysis, not a requirement and not a replacement for researchers, lived-experience review or human judgement.'],
  ['Can I try Gobby free?', 'Yes. You can begin with up to 50 responses and no credit card is required.'],
] as const
