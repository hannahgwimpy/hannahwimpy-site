"use client"

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'

export default function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const run = (fn: () => void) => () => {
    fn()
    setOpen(false)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hannahgwimpy@icloud.com')
      alert('email copied to clipboard')
    } catch {}
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] grid place-items-start pt-24 bg-black/50">
      <Command label="Command Menu" className="w-[640px] mx-auto rounded-md border card text-sm">
        <Command.Input placeholder="type a command..." className="w-full bg-transparent p-3 outline-none" />
        <Command.List className="max-h-[50vh] overflow-auto">
          <Command.Empty className="p-3 text-text-secondary">no results.</Command.Empty>

          <Command.Group heading="navigate" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-text-secondary">
            <Command.Item onSelect={run(() => router.push('/'))} className="px-3 py-2 aria-selected:bg-bg-secondary">home</Command.Item>
            <Command.Item onSelect={run(() => router.push('/work'))} className="px-3 py-2 aria-selected:bg-bg-secondary">work</Command.Item>
            <Command.Item onSelect={run(() => router.push('/blog'))} className="px-3 py-2 aria-selected:bg-bg-secondary">blog</Command.Item>
          </Command.Group>

          <Command.Group heading="actions" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-text-secondary">
            <Command.Item onSelect={run(copyEmail)} className="px-3 py-2 aria-selected:bg-bg-secondary">copy email</Command.Item>
            <Command.Item onSelect={run(() => window.open('https://x.com/hannahgwimpy','_blank'))} className="px-3 py-2 aria-selected:bg-bg-secondary">open twitter</Command.Item>
            <Command.Item onSelect={run(() => window.open('https://github.com/hannahgwimpy','_blank'))} className="px-3 py-2 aria-selected:bg-bg-secondary">open github</Command.Item>
            <Command.Item onSelect={run(() => window.open('https://linkedin.com/in/hannahgwimpy','_blank'))} className="px-3 py-2 aria-selected:bg-bg-secondary">open linkedin</Command.Item>
            <Command.Item onSelect={run(() => window.open('/resume.pdf','_blank'))} className="px-3 py-2 aria-selected:bg-bg-secondary">download resume</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  )
}
