/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 disables built-in optimization for static export
  },
};

export default nextConfig;
