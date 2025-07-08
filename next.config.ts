/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // এখানে আপনার অনুমোদিত ডোমেইন যোগ করুন
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        // Optional: pathname যদি নির্দিষ্ট পাথের ছবি লোড করতে চান
        // pathname: '/s/files/**',
      },
    ],
  },
};

module.exports = nextConfig;