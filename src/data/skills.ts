export interface SkillGroup {
  label: string
  items: string[]
}

// Edit freely — this list drives the Skills section.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'REST APIs', 'SQL & NoSQL databases'],
  },
  {
    label: 'Mobile',
    items: ['Android (Kotlin/Java)', 'iOS (Swift)', 'Cross-platform delivery'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Terraform', 'CI/CD pipelines', 'GitHub Actions', 'Docker'],
  },
  {
    label: 'Tooling',
    items: ['Git & GitHub', 'Vite', 'Figma handoff', 'Agile delivery'],
  },
]
