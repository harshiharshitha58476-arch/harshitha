import { BookOpen, CalendarDays, Check, GraduationCap } from 'lucide-react'
import { education, learningAreas } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="education-title" eyebrow="Education" title="My academic journey" />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <ol className="relative space-y-8 border-l-2 border-dashed border-brand/25 pl-8 md:pl-10">
            {education.map((item, i) => (
              <Reveal as="li" key={item.degree} delay={i * 120} className="relative">
                <span
                  className="absolute -left-[calc(2rem+9px)] top-6 flex size-4 items-center justify-center rounded-full bg-gradient-brand ring-4 ring-background md:-left-[calc(2.5rem+9px)]"
                  aria-hidden="true"
                />
                <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/10 md:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </span>
                    {item.current ? (
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Current</span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-muted-foreground">{item.institution}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent-foreground">
                    <CalendarDays className="size-4" aria-hidden="true" />
                    {item.period}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={150}>
            <div className="glass h-full rounded-3xl p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">Key Learning Areas</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {learningAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/70 px-4 py-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
