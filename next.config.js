module.exports = {
  images: {
    domains: [],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generate");
    }
    return config;
  },
};
