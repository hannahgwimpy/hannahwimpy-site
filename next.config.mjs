import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx', 'md'],
  images: {
    dangerouslyAllowSVG: true,
  },
}

export default withMDX(nextConfig)
