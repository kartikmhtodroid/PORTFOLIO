import React from 'react'
import { Code2, Cloud, Server, Database, CheckCircle2 } from 'lucide-react'
import { services } from '../data/portfolioData'

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-indigo-500" />,
  Cloud: <Cloud className="w-6 h-6 text-cyan-500" />,
  Server: <Server className="w-6 h-6 text-purple-500" />,
  Database: <Database className="w-6 h-6 text-pink-500" />,
}

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900">
            Services & Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            How I Can Add Value To Your Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            From architecture planning to production shipping, I deliver end-to-end technical excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all hover:shadow-lg space-y-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {iconMap[service.icon] || <Code2 className="w-6 h-6 text-indigo-500" />}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                {service.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
