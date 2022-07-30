/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: [
      "www.masakapahariini.com",
      "comicbook.com",
    ],
  },

  swcMinify: true,
}

module.exports = nextConfig
