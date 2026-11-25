import { Code2, Cpu } from 'lucide-react'
import { skillGroups, skillLevelLabels, type Skill } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const groupIcons = { code: Code2, cpu: Cpu }

function SkillRow({ skill }: { skill: Skill }) {
  const label = skillLevelLabels[skill.level]
  return (
    <li className="rounded-xl border border-border/70 bg-card/80 px-4 py-3.5 transition-colors hover:border-brand/30">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="mt-3 flex gap-1.5" role="img" aria-label={`${skill.name}: ${label}, level ${skill.level} of 5`}>
        {[1, 2, 3, 4, 5].map((step) => (
          <span
            key={step}
            className={cn('h-1.5 flex-1 rounded-full', step <= skill.level ? 'bg-gradient-brand' : 'bg-muted')}
          />
        ))}
      </div>
    </li>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="skills-title"
          eyebrow="Technical Skills"
          title="Tools & foundations I work with"
          description="A growing toolkit spanning web technologies and core computer science concepts."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.icon]
            return (
              <Reveal key={group.title} delay={i * 120}>
                <article className="glass h-full rounded-3xl p-7 transition-transform hover:-translate-y-1 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-md shadow-brand/25">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="grid gap-3">
                    {group.skills.map((skill) => (
                      <SkillRow key={skill.name} skill={skill} />
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
