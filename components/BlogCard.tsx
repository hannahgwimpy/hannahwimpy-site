import Link from 'next/link'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date)
  const pretty = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  return (
    <Link href={`/blog/${post.slug}`} className="card rounded-md p-4 flex items-center justify-between hover:shadow-card">
      <div>
        <div className="text-accent-primary hover:text-accent-hover">{post.title}</div>
        <div className="text-sm text-text-secondary">{post.description}</div>
      </div>
      <div className="text-sm text-text-secondary">{pretty}</div>
    </Link>
  )
}
