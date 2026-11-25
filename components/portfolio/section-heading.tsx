import { Reveal } from './reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id: string
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-accent px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-foreground">
        <span className="size-1.5 rounded-full bg-gradient-brand" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  )
}
