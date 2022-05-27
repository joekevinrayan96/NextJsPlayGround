/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // future: { webpack5: true },
};

// module.exports = nextConfig;
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
