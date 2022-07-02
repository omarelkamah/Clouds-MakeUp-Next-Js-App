/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "http://localhost:3000/",
      "d3t32hsnjxo7q6.cloudfront.net",
      "cdn.shopify.com",
      "3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com",
      "www.purpicks.com",
      "static-assets.glossier.com",
      "www.nyxcosmetics.com",
      "www.fentybeauty.com",
      "www.clinique.com",
      "www.dior.com",
      "imancosmetics.com",
      "s3.amazonaws.com",
      "www.benefitcosmetics.com",
      "www.smashbox.com",
    ],
  },
};

module.exports = nextConfig;
