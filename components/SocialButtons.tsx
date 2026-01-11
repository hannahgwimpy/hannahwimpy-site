import Link from 'next/link'

const socials = [
  { label: 'twitter', href: 'https://x.com/hannahgwimpy' },
  { label: 'github', href: 'https://github.com/hannahgwimpy' },
  { label: 'linkedin', href: 'https://linkedin.com/in/hannahgwimpy' },
  { label: 'blog', href: '/blog' },
  { label: 'email', href: 'mailto:hannahgwimpy@icloud.com' },
]

export default function SocialButtons() {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {socials.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          className="text-xs border px-3 py-2 rounded-md text-text-secondary hover:text-accent-hover hover:border-accent-hover transition-colors uppercase"
          target="_blank"
          rel="noopener noreferrer"
        >
          {s.label}
        </Link>
      ))}
    </div>
  )
}
