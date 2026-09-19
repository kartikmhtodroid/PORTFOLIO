import React from 'react'
import { Calendar, MapPin, Download, CheckCircle2 } from 'lucide-react'
import { experiences } from '../data/portfolioData'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Milestones
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Track record of shipping mission-critical systems and collaborating in agile teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                  exp.current
                    ? 'bg-indigo-600 border-indigo-200 dark:border-indigo-950 ring-4 ring-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 group-hover:border-indigo-500'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm group-hover:border-indigo-300 dark:group-hover:border-indigo-800/80 transition-all group-hover:shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/80 via-purple-50/50 to-white dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg">
              Want the complete professional resume?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Download the PDF or get in touch for references and in-depth project documentation.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all shrink-0"
          >
            <Download className="w-4 h-4" />
            Request Resume PDF
          </a>
        </div>
      </div>
    </section>
  )
}
