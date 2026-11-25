import { Mail, MapPin, Phone } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/portfolio-data'
import { ContactForm } from './contact-form'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: `+91 ${profile.phone}`, href: `tel:+91${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin, external: true },
  { icon: Github, label: 'GitHub', value: 'View my GitHub', href: profile.github, external: true },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-muted/50 py-20 md:py-28">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's Connect!"
          description="I'm always interested in learning, collaborating, and exploring new opportunities in technology."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <ul className="grid gap-3">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</span>
                      <span className="block truncate font-medium">{item.value}</span>
                    </span>
                  </>
                )
                const className =
                  'group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-brand/30 hover:shadow-md hover:shadow-brand/10'
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={className}
                        {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={className}>{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
