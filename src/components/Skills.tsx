import React, { useState } from 'react'
import { Zap, Star } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...skillCategories.map((c) => c.category)]

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900">
            Skills & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Modern Tech Stack & Core Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Tools, languages, and frameworks I use every day to build enterprise-grade software.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all hover:shadow-md space-y-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {cat.description}
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-4 pt-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                        {skill.name}
                        {skill.popular && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                            <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                            Primary
                          </span>
                        )}
                      </span>
                      <span className="text-slate-400 font-mono">{skill.level}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tech Chip Marquee/List */}
        <div className="mt-14 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
            Also Familiar & Experienced With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              'REST APIs',
              'GraphQL',
              'WebSockets',
              'Microservices',
              'Tailwind CSS v4',
              'Jest & Vitest',
              'Git & GitHub',
              'CI/CD Pipelines',
              'Nginx',
              'OAuth 2.0 / JWT',
              'Postman',
              'Linux Bash',
              'Prisma ORM',
              'Supabase',
              'Serverless Functions',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
