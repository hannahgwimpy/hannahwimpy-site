"use client"

import { motion } from 'framer-motion'

const tabs = ['all', 'founding', 'operating', 'research', 'projects', 'leadership', 'education', 'awards'] as const
export type Tab = typeof tabs[number]

export default function WorkFilters({ value, onChange }: { value: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="relative inline-flex flex-wrap items-center gap-1.5 rounded-md border px-1.5 py-1.5">
      {tabs.map((t) => {
        const active = value === t
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`relative z-10 text-sm px-3 py-1 rounded transition-colors uppercase ${
              active ? 'text-accent-primary' : 'text-text-secondary hover:text-accent-hover'
            }`}
          >
            {active && (
              <motion.span
                layoutId="tab-active"
                className="absolute inset-0 -z-10 rounded bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] border border-[color-mix(in_oklab,var(--accent-primary)_30%,transparent)]"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
            {t}
          </button>
        )
      })}
    </div>
  )
}
