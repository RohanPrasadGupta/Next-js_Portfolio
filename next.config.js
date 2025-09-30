/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // disables the IPX loader on Netlify
  },
};

module.exports = nextConfig;
