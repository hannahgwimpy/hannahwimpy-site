"use client"

const tabs = ['all', 'founding', 'operating', 'research', 'projects', 'leadership', 'education', 'awards'] as const
export type Tab = typeof tabs[number]

export default function WorkFilters({ value, onChange }: { value: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`text-sm px-3.5 py-1.5 rounded border transition-colors ${
            value === t ? 'bg-[var(--accent-primary)] text-black border-[var(--accent-primary)]' : 'text-text-secondary hover:text-accent-hover hover:border-accent-hover'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
