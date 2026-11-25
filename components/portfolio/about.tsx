import { Brain, GraduationCap, Lightbulb, Rocket } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  { icon: GraduationCap, title: 'MCA Student', text: 'Bangalore University' },
  { icon: Rocket, title: 'Full Stack', text: 'Frontend to backend' },
  { icon: Brain, title: 'AI Enthusiast', text: 'Exploring intelligent systems' },
  { icon: Lightbulb, title: 'Problem Solver', text: 'Real-world solutions' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="about-title" eyebrow="About Me" title="Building with curiosity and purpose" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-10">
              <p className="text-pretty text-lg leading-relaxed text-foreground/85">
                I am <span className="font-semibold text-foreground">Harshitha.R</span>, a BCA graduate currently pursuing my
                Master of Computer Applications (MCA). I am passionate about{' '}
                <span className="font-medium text-accent-foreground">Full Stack Development</span>,{' '}
                <span className="font-medium text-accent-foreground">Artificial Intelligence</span>, and modern technologies.
              </p>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                I enjoy learning new programming languages, developing creative applications, and solving real-world problems.
                I am continuously improving my technical knowledge and looking forward to growing as a software developer.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
