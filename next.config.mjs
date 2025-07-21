/** @type {import('next').NextConfig} */
const nextConfig = {
  
   output: "export",
   distDir: 'out-bulid', 
  trailingSlash: true,
  images: {
    unoptimized: true,          // Required for static export if using <Image>
  },
  reactStrictMode: true,
};

export default nextConfig;
