"use client"

import * as React from 'react'

export default function BlogFilters({ years, state, onChange }: {
  years: number[]
  state: { query: string; year: number | 'all'; sort: 'newest' | 'oldest' }
  onChange: (next: { query?: string; year?: number | 'all'; sort?: 'newest' | 'oldest' }) => void
}) {
  return (
    <div className="space-y-3">
      <input
        className="w-full card rounded-md px-3 py-2 text-base placeholder:text-text-secondary/70 bg-transparent"
        placeholder="search posts..."
        value={state.query}
        onChange={(e) => onChange({ query: e.target.value })}
      />
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="text-sm text-text-secondary">year:</span>
          <button onClick={() => onChange({ year: 'all' })} className={`text-sm px-2.5 py-1.5 rounded border ${state.year === 'all' ? 'bg-[var(--accent-primary)] text-black border-[var(--accent-primary)]' : 'text-text-secondary hover:text-accent-hover hover:border-accent-hover'}`}>all</button>
          {years.map((y) => (
            <button key={y} onClick={() => onChange({ year: y })} className={`text-sm px-2.5 py-1.5 rounded border ${state.year === y ? 'bg-[var(--accent-primary)] text-black border-[var(--accent-primary)]' : 'text-text-secondary hover:text-accent-hover hover:border-accent-hover'}`}>{y}</button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-text-secondary">sort:</span>
          {(['newest','oldest'] as const).map((s) => (
            <button key={s} onClick={() => onChange({ sort: s })} className={`text-sm px-2.5 py-1.5 rounded border ${state.sort === s ? 'bg-[var(--accent-primary)] text-black border-[var(--accent-primary)]' : 'text-text-secondary hover:text-accent-hover hover:border-accent-hover'}`}>{s}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
