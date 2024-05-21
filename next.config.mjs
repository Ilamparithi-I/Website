/** @type {import('next').NextConfig} */
import withImages from 'next-images';

const nextConfig = withImages({
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
});

export default nextConfig;


