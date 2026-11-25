'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const inputClass =
  'w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-brand/50 focus:ring-4 focus:ring-brand/15'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const body = `${message}\n\n— ${name} (${email})`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8" aria-describedby={sent ? 'form-status' : undefined}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required placeholder="What would you like to discuss?" className={inputClass} />
      </div>
      <div className="mt-5 grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="Write your message..." className={`${inputClass} resize-none`} />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Send Message
        <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </button>

      <p id="form-status" role="status" aria-live="polite" className="mt-4 min-h-5 text-sm">
        {sent ? (
          <span className="inline-flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            Your email app has opened with the message ready to send. Thank you!
          </span>
        ) : null}
      </p>
    </form>
  )
}
