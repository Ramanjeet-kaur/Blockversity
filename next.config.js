/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
    "res.cloudinary.com",
    "thrangra.sirv.com",
    "griddb-pro.azureedge.net",
    "avatars.githubusercontent.com",

    ]
  }
}

module.exports = nextConfig
