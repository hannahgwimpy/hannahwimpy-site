import { notFound } from 'next/navigation'
import type { ComponentType } from 'react'
import { blogPosts } from '@/lib/data'
import type { BlogPost } from '@/lib/types'
import { mdxMap } from '@/content/blog'

export function generateStaticParams() {
  return blogPosts.map((p: BlogPost) => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const Post = mdxMap[params.slug] as ComponentType
  if (!Post) return notFound()
  const meta = blogPosts.find((p: BlogPost) => p.slug === params.slug)!
  const pretty = new Date(meta.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-6">
        <div className="text-2xl text-accent-primary">{meta.title}</div>
        <div className="text-xs text-text-secondary">{pretty}</div>
      </div>
      <Post />
    </article>
  )
}
