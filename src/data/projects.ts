export interface Project {
  title: string
  description: string
  tags: string[]
  category: 'systems' | 'products'
  accent: string
  link?: string
}

// Edit freely — each card on the Work section is generated from this list.
// The "products" entries are placeholders inferred from project names on
// disk; swap in real descriptions/links (or delete the ones you'd rather
// not show publicly) before sharing the site.
export const projects: Project[] = [
  {
    title: 'HRMS & Payroll System',
    description: 'Automates employee records, payroll runs, and compliance reporting for growing teams.',
    tags: ['Vue', 'Node.js', 'SQL'],
    category: 'systems',
    accent: 'linear-gradient(135deg,#4f46e5,#22d3ee)',
  },
  {
    title: 'Expenses Management System',
    description: 'Tracks operational costs with multi-level approval workflows and real-time reporting.',
    tags: ['TypeScript', 'REST API'],
    category: 'systems',
    accent: 'linear-gradient(135deg,#f97316,#f43f5e)',
  },
  {
    title: 'Restaurant POS',
    description: 'Real-time order taking, inventory tracking, and sales management for restaurant floors.',
    tags: ['POS', 'Realtime'],
    category: 'systems',
    accent: 'linear-gradient(135deg,#ef4444,#f59e0b)',
  },
  {
    title: 'Water Refilling Station POS',
    description: 'Billing, service tracking, and a customer database built for refilling-station operators.',
    tags: ['POS', 'CRM'],
    category: 'systems',
    accent: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
  },
  {
    title: 'Jayride Platform',
    description: 'Multi-platform ride-hailing ecosystem — rider web app, native driver apps for Android & iOS, and an investor-facing shareholders dashboard.',
    tags: ['Android', 'iOS', 'Vue'],
    category: 'products',
    accent: 'linear-gradient(135deg,#7c3aed,#22d3ee)',
  },
  {
    title: 'AiPAYGO',
    description: 'Modern payments and business tooling — in active development.',
    tags: ['Fintech', 'Product'],
    category: 'products',
    accent: 'linear-gradient(135deg,#4f46e5,#0891b2)',
  },
  {
    title: 'Smudge TV',
    description: 'Streaming media platform with a companion marketing site for content discovery.',
    tags: ['Media', 'Web'],
    category: 'products',
    accent: 'linear-gradient(135deg,#ec4899,#8b5cf6)',
  },
  {
    title: 'Vestinit Ventures',
    description: 'Corporate web presence for an investment ventures firm.',
    tags: ['Corporate site'],
    category: 'products',
    accent: 'linear-gradient(135deg,#0ea5e9,#22c55e)',
  },
  {
    title: 'Republisys',
    description: 'Corporate website and digital presence.',
    tags: ['Web'],
    category: 'products',
    accent: 'linear-gradient(135deg,#64748b,#334155)',
  },
]
