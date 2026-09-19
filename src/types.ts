export interface PersonalDetails {
  name: string
  role: string
  tagline: string
  bio: string
  subBio: string
  location: string
  email: string
  phone: string
  status: string
  availableForHire: boolean
  socials: {
    github: string
    linkedin: string
    twitter?: string
    email: string
  }
  stats: {
    label: string
    value: string
    description: string
  }[]
}

export interface SkillItem {
  name: string
  icon?: string
  level?: number // 1 to 100
  popular?: boolean
}

export interface SkillCategory {
  category: string
  description: string
  skills: SkillItem[]
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  fullDescription?: string
  category: 'Full Stack' | 'Frontend' | 'Backend & Cloud' | 'Mobile & AI'
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  metrics?: string
  image: string
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  description: string[]
  technologies: string[]
}

export interface Service {
  title: string
  description: string
  icon: string
  highlights: string[]
}
