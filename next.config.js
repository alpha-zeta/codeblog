module.exports = {
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  images: {
    domains: ["res.cloudinary.com", "robohash.org"],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generate");
    }
    return config;
  },
};
