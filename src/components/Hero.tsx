import React from 'react'
import {
  Mail,
  ArrowRight,
  Code2,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react'
import { personalDetails } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

export const Hero: React.FC = () => {
  const [copied, setCopied] = React.useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium shadow-xs">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
              <span>Full-Stack Engineering & Cloud Architecture</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {personalDetails.name}
              </span>
            </h1>

            {/* Subheading / Tagline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalDetails.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
              {personalDetails.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-all hover:translate-y-[-2px] active:translate-y-0"
              >
                View Selected Works
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:translate-y-[-2px]"
              >
                Get In Touch
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-sm cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Resume Link */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
                Connect:
              </span>
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              {personalDetails.socials.twitter && (
                <a
                  href={personalDetails.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-700 transition-colors shadow-xs"
                  aria-label="Twitter/X Profile"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              )}

              <a
                href={personalDetails.socials.email}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 dark:hover:border-pink-700 transition-colors shadow-xs"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Skill Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Code Mockup Card */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 ml-2">
                      kartik-mahato.ts
                    </span>
                  </div>
                  <Code2 className="w-4 h-4 text-slate-400" />
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200 space-y-1">
                  <div>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">name:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'{personalDetails.name}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">role:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'{personalDetails.role}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">location:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">'{personalDetails.location}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">coreStack:</span> [
                  </div>
                  <div className="pl-8 text-amber-600 dark:text-amber-300">
                    'React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS'
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-500">passion:</span>{' '}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      'Crafting scalable systems & delightful UIs'
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">availableForHire:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Bottom Quick Feature Highlights */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Clean Architecture</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>High Performance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Type-Safe TypeScript</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>CI/CD & Cloud Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalDetails.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm hover:border-indigo-300 dark:hover:border-indigo-800 transition-all hover:shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
