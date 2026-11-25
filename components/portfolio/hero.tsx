import Image from 'next/image'
import { ArrowRight, Brain, Code2, Mail, Sparkles } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { profile } from '@/lib/portfolio-data'
import { Typewriter } from './typewriter'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-[0.12] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to internships & opportunities
          </p>

          <p className="text-lg font-medium text-muted-foreground">{"Hello, I'm"}</p>
          <h1 id="hero-title" className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Harshitha<span className="text-gradient">.R</span>
          </h1>

          <p className="mt-5 min-h-[2.25rem] font-heading text-xl font-semibold sm:text-2xl">
            <Typewriter words={profile.roles} />
          </p>

          <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{profile.headline}</p>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {`"${profile.tagline}"`}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5"
            >
              Explore My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-brand/40 hover:bg-accent"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground">
              <Github className="size-4" aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground">
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground">
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-1000">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-brand opacity-25 blur-2xl" aria-hidden="true" />
          <div className="animate-float relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-brand p-[3px] shadow-2xl shadow-brand/25">
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-[calc(2rem-3px)] bg-card">
              {profile.profileImage ? (
                <Image src={profile.profileImage} alt="Portrait of Harshitha.R" fill className="object-cover" priority sizes="(min-width: 1024px) 384px, 80vw" />
              ) : (
                <div className="flex flex-col items-center gap-4 text-center" role="img" aria-label="Profile photo placeholder for Harshitha.R">
                  <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                  <div className="relative flex size-36 items-center justify-center rounded-full bg-gradient-brand font-heading text-5xl font-bold text-primary-foreground shadow-xl">
                    HR
                  </div>
                  <p className="relative text-sm font-medium text-muted-foreground">Your photo here</p>
                </div>
              )}
            </div>
          </div>

          <div className="glass absolute -left-6 top-10 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Code2 className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium">Full Stack</span>
          </div>
          <div className="glass absolute -right-5 bottom-16 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Brain className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium">AI Explorer</span>
          </div>
          <div className="glass absolute -bottom-4 left-8 hidden items-center gap-2 rounded-full px-3 py-1.5 sm:flex">
            <Sparkles className="size-3.5 text-brand" aria-hidden="true" />
            <span className="text-xs font-medium">MCA Student</span>
          </div>
        </div>
      </div>
    </section>
  )
}
