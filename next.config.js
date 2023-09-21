/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "misc.scdn.co",
      "i.scdn.co",
      "geo-media.beatsource.com",
      "i1.sndcdn.com",
      "media.pitchfork.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
