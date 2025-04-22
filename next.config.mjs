/** @type {import('next').NextConfig} */
const nextConfig = {
  
  //output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,          // Required for static export if using <Image>
  },
  reactStrictMode: true,
};

export default nextConfig;
