"use client"

import type { ComponentType } from 'react'
// Import MDX posts here so they are bundled client-side
// @ts-ignore
import HelloWorld from '../content/blog/hello-world.mdx'

const clientMap: Record<string, ComponentType<any>> = {
  'hello-world': HelloWorld,
}

export default function MDXRenderer({ slug }: { slug: string }) {
  const C = clientMap[slug]
  if (!C) return null
  return <C />
}
