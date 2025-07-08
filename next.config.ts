/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // এখানে আপনার অনুমোদিত ডোমেইন যোগ করুন
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**', 
      },
    ],
  },
};

module.exports = nextConfig;