/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bafybeig6d5xfmffda2spkndvj4vlpdcoljylpy2kprmyhvsfnjtlrxwzue.ipfs.thirdwebstorage.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
    domains: ["gateway.ipfscdn.io"],
  },
};

module.exports = nextConfig;
