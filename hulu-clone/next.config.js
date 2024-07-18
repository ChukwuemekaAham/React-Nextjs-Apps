/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "coaching.papareact.com",
      "image.tmdb.org",
      "api.themoviedb.org",
    ],
  },
};

module.exports = nextConfig;
