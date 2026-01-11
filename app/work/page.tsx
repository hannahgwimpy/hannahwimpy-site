"use client"

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkCard, { type WorkItem } from '@/components/WorkCard'
import WorkFilters, { type Tab } from '@/components/WorkFilters'
import { workData } from '@/lib/data'

export default function WorkPage() {
  const [tab, setTab] = useState<Tab>('all')

  const normalizeYear = (s?: string) => {
    if (!s) return 0
    const matches = s.match(/\b(20\d{2})\b/g)
    if (!matches) return 0
    return Math.max(...matches.map((m) => parseInt(m, 10)))
  }

  type SectionKey = keyof typeof workData
  const sections = useMemo<[SectionKey, WorkItem[]][]>(() => {
    const entries: [SectionKey, WorkItem[]][] =
      tab === 'all'
        ? (Object.entries(workData) as [SectionKey, WorkItem[]][])
        : [[tab as SectionKey, workData[tab as SectionKey]]]
    return entries.map(([name, items]) => [name, [...items].sort((a, b) => normalizeYear(b.date) - normalizeYear(a.date))])
  }, [tab])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl text-accent-primary tracking-tight">work</h1>
      <div className="flex items-center justify-end">
        <a href="/resume.pdf" className="text-sm border px-3 py-1.5 rounded text-text-secondary hover:text-accent-hover hover:border-accent-hover">↓ RESUME</a>
      </div>
      <WorkFilters value={tab} onChange={setTab} />

      <div className="space-y-8 pt-2">
        {sections.map(([name, items]) => {
          const nameStr = String(name)
          return (
          <section key={nameStr} className="space-y-3">
            <h2 className="text-base text-text-secondary uppercase"><span className="text-accent-primary">•</span> {nameStr}</h2>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`${tab}-${nameStr}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                layout
                className="grid gap-3"
              >
                {items.map((item, i) => (
                  <motion.div
                    key={item.title + i}
                    layout
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <WorkCard item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
          )
        })}
      </div>
    </div>
  )
}
