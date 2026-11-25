import { ArrowUp, Mail } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/portfolio-data'

export function Footer() {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <a href="#home" className="font-heading text-lg font-semibold">
            Harshitha<span className="text-gradient">.R</span>
          </a>
          <p className="mt-1 text-sm text-primary-foreground/70">Designed and Developed by Harshitha.R</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <s.icon className="size-4" aria-hidden="true" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 inline-flex size-10 items-center justify-center rounded-full bg-gradient-brand transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
        {`© ${new Date().getFullYear()} Harshitha.R. All rights reserved.`}
      </div>
    </footer>
  )
}
