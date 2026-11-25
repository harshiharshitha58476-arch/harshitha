import { ArrowUpRight, Fingerprint, ScanSearch } from 'lucide-react'
import { Github } from './brand-icons'
import { projects } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projectIcons = [Fingerprint, ScanSearch]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="projects-title"
          eyebrow="My Projects"
          title="Things I've built"
          description="Projects where I applied web development and AI to solve practical problems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[i % projectIcons.length]
            return (
              <Reveal key={project.title} delay={i * 120}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/15">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-brand">
                    <div className="bg-grid absolute inset-0 opacity-40 invert" aria-hidden="true" />
                    <span className="relative flex size-20 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="size-9" aria-hidden="true" />
                    </span>
                    <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 font-heading text-xs font-semibold text-white backdrop-blur">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

                    <ul className="mt-5 space-y-1.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm">
                          <span className="size-1.5 rounded-full bg-gradient-brand" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-brand/20 bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-3 pt-7">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        View Project
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                        <span className="sr-only">: {project.title}</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand/40 hover:bg-accent"
                      >
                        <Github className="size-4" aria-hidden="true" />
                        GitHub
                        <span className="sr-only">: {project.title} repository</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
