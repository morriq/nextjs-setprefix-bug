/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  distDir: '.build',
  basePath: '/myapp',
  assetPrefix: 'https://cdn.staticprefix.com/abc/123/'
}

module.exports = nextConfig
