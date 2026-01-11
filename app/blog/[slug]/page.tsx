import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/data'
import type { BlogPost } from '@/lib/types'
import dynamic from 'next/dynamic'
const MDXRenderer = dynamic(() => import('@/components/MDXRenderer'), { ssr: false })

export function generateStaticParams() {
  return blogPosts.map((p: BlogPost) => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const meta = blogPosts.find((p: BlogPost) => p.slug === params.slug)
  if (!meta) return notFound()
  const pretty = new Date(meta.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-6">
        <div className="text-2xl text-accent-primary">{meta.title}</div>
        <div className="text-xs text-text-secondary">{pretty}</div>
      </div>
      <MDXRenderer slug={params.slug} />
    </article>
  )
}
