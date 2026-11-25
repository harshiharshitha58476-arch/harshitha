'use client'

import { useEffect, useState } from 'react'

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? 40 : 85
    if (!deleting && text === word) delay = 1600
    if (deleting && text === '') delay = 300

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="text-gradient">
        {text}
      </span>
      <span aria-hidden="true" className="animate-caret ml-0.5 inline-block h-[1em] w-0.5 translate-y-[0.15em] bg-brand" />
    </span>
  )
}
