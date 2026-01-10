"use client"

import * as React from 'react'
import BlogCard from '@/components/BlogCard'
import BlogFilters from '@/components/BlogFilters'
import { blogPosts } from '@/lib/data'

export default function BlogPage() {
  const [state, setState] = React.useState<{ query: string; year: number | 'all'; sort: 'newest' | 'oldest' }>({ query: '', year: 'all', sort: 'newest' })

  const years = React.useMemo(() => {
    const ys = new Set<number>()
    blogPosts.forEach((p) => ys.add(new Date(p.date).getFullYear()))
    return Array.from(ys).sort((a, b) => b - a)
  }, [])

  const filtered = blogPosts
    .filter((p) => {
      const matchesQuery = (p.title + ' ' + p.description).toLowerCase().includes(state.query.toLowerCase())
      const y = new Date(p.date).getFullYear()
      const matchesYear = state.year === 'all' || y === state.year
      return matchesQuery && matchesYear
    })
    .sort((a, b) => state.sort === 'newest' ? +new Date(b.date) - +new Date(a.date) : +new Date(a.date) - +new Date(b.date))

  return (
    <div className="space-y-6">
      <h1 className="text-3xl text-accent-primary tracking-tight">blog</h1>

      {/* hero banner image */}
      <div className="relative overflow-hidden rounded-md border card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/talking.png" alt="talk" className="w-full h-64 object-cover object-top opacity-80" style={{ filter: 'saturate(0.85) contrast(1.12) hue-rotate(-8deg)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(228, 142, 95, 0.25), transparent)' }} />
      </div>

      <BlogFilters years={years} state={state} onChange={(next) => setState((s) => ({ ...s, ...next }))} />

      <div className="text-xs text-text-secondary">{filtered.length} posts</div>

      <div className="grid gap-3">
        {filtered.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  )
}
