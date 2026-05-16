/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  serverExternalPackages: ['nodemailer'],
}

module.exports = nextConfig
