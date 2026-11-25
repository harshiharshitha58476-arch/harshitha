'use client'

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="font-heading text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          Harshitha<span className="text-gradient">.R</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm transition-colors hover:text-foreground',
                  active === link.href ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 pb-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base transition-colors hover:bg-muted',
                  active === link.href ? 'bg-accent font-medium text-accent-foreground' : 'text-foreground',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.resumeUrl}
              download
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
