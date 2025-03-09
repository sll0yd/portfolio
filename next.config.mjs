/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Since this is for a portfolio at the root domain, you might not need basePath
  // But if you're deploying to username.github.io/portfolio:
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio',
  trailingSlash: true,
}

module.exports = nextConfig