import { BookOpen, Brush, Music, Plane, Sparkles } from 'lucide-react'
import { interests } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const icons = { music: Music, plane: Plane, brush: Brush, book: BookOpen, sparkles: Sparkles }

export function Interests() {
  return (
    <section id="interests" aria-labelledby="interests-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="interests-title" eyebrow="Interests" title="Beyond the code" description="The passions that keep me creative, curious, and inspired." />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {interests.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="group glass relative h-full overflow-hidden rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5">
                  <div className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]" aria-hidden="true" />
                  <span className="relative mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-5 font-semibold">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
