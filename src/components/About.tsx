import React from 'react'
import {
  Code,
  Cpu,
  Layers,
  Rocket,
  MapPin,
  Briefcase,
  Sparkles,
} from 'lucide-react'
import { personalDetails } from '../data/portfolioData'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering with Passion, Purpose, and Precision
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A closer look into my technical journey, core philosophy, and problem-solving methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                Who I Am & What Drives Me
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalDetails.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalDetails.subBio}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether creating a high-throughput streaming backend with Redis and Node.js or refining a sub-second fluid interface using React and Tailwind CSS, I focus on clean maintainability, exhaustive testing, and tangible user value.
              </p>

              {/* Status and Location tags */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>{personalDetails.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-purple-500" />
                  <span>{personalDetails.status}</span>
                </div>
              </div>
            </div>

            {/* Quick Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                  Performance-First
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Optimized bundle sizes, intelligent caching, and sub-second API roundtrips.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
                <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                  Modular Architecture
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Clean separation of concerns, reusable components, and extensible schemas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Areas & Technical Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent dark:bg-slate-900/90 shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Technical Focus Areas
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Full-Stack Web Systems
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      TypeScript, React 19, Next.js, and Node.js with end-to-end type safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Cloud & Microservices
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Containerizing workloads via Docker, orchestrating with CI/CD and AWS/GCP services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 mt-0.5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Data Integrity & Scalability
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      PostgreSQL, MongoDB, and Redis with high-throughput query optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to action card */}
              <div className="p-4 rounded-2xl bg-indigo-600 text-white space-y-2 mt-4">
                <div className="text-sm font-semibold">Interested in collaborating?</div>
                <p className="text-xs text-indigo-100">
                  I'm actively discussing new product builds, full-time senior engineering opportunities, and technical consulting.
                </p>
                <div className="pt-1">
                  <a
                    href="#contact"
                    className="inline-block px-3.5 py-1.5 rounded-lg bg-white text-indigo-600 text-xs font-bold hover:bg-indigo-50 transition-colors"
                  >
                    Start a Conversation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
