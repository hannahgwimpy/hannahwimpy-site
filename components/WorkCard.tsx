import Link from 'next/link'

export interface WorkItem {
  title: string
  date: string
  location?: string
  description?: string
  tags: string[]
  link?: string
  image?: string
}

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="card rounded-md p-4 flex items-start justify-between gap-4 hover:shadow-card">
      <div className="space-y-2">
        <div className="text-accent-primary capitalize">
          {item.link ? (
            <Link href={item.link} target="_blank" className="hover:text-accent-hover">{item.title}</Link>
          ) : (
            item.title
          )}
        </div>
        <div className="text-sm text-text-secondary">{item.date}{item.location ? ` · ${item.location}` : ''}</div>
        {item.description && <p className="text-sm text-text-secondary/90 max-w-[70ch]">{item.description}</p>}
        <div className="flex flex-wrap gap-2 pt-2">
          {item.tags?.map((t) => (
            <span key={t} className="text-[13px] px-2.5 py-1 rounded border bg-[var(--tag-bg)] border-[var(--tag-border)] text-text-secondary">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
