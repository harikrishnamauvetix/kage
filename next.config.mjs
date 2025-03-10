/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
   //distDir: 'build', 
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
  reactStrictMode: true,
};

export default nextConfig;
