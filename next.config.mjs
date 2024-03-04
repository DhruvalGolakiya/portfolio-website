/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://read.cv/dhruval",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
