/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.georgeinsurance.agency' }],
        destination: 'https://georgeinsurance.agency/:path*',
        permanent: true
      }
    ];
  }
};
export default nextConfig;
