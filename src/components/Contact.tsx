import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  Clock,
} from 'lucide-react'
import { personalDetails } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  // Contact information
  const email = 'kartikmahatosviet@gmail.com'
  const phone = personalDetails.phone
  const location = 'Chandigarh, India'

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    if (!text) return

    navigator.clipboard.writeText(text)

    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900">
            Contact Me
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project in mind, an engineering opening, or just want to connect?
            My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">

            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              {/* Email */}
              <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 flex items-center justify-between">
                <div className="flex items-center gap-3">

                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      Email Address
                    </div>

                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone - only shown when a phone number exists */}
              {phone && (
                <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">

                    <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                      <Phone className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-xs text-slate-400 font-medium">
                        Phone / WhatsApp
                      </div>

                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {phone}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}

              {/* Location */}
              <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 flex items-center gap-3">

                <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    Location
                  </div>

                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {location}
                  </div>
                </div>
              </div>

              {/* Response */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Typical response time: under 24 hours.</span>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3">

              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Developer Profiles
              </h4>

              <div className="grid grid-cols-3 gap-3">

                <a
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center justify-center gap-1.5 transition-all text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>

                <a
                  href={personalDetails.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center justify-center gap-1.5 transition-all text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>

                {personalDetails.socials.twitter && (
                  <a
                    href={personalDetails.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-600 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center justify-center gap-1.5 transition-all text-slate-700 dark:text-slate-300 hover:text-sky-500"
                  >
                    <TwitterIcon className="w-5 h-5" />
                    <span className="text-xs font-medium">Twitter/X</span>
                  </a>
                )}

              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">

            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative">

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">

                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Kartik Mahato has received your
                    notification and will get back to you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        Your Email *
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all"
                      />
                    </div>

                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      Subject *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Job Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                      Message *
                    </label>

                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, budget, or role specifications..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all hover:translate-y-[-1px] cursor-pointer disabled:opacity-70 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}