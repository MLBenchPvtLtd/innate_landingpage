import { NextConfig } from 'next';

// /** @type {import('next').NextConfig} */
const nextConfig:NextConfig = {
    async redirects() {
      if (process.env.NEXT_PUBLIC_ENV === 'development') {
        return [];
      } else {
        return [
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'innate-nw.com', // Redirect ONLY if the host is non-www
              },
            ],
            destination: 'https://www.innate-nw.com/:path*',
            permanent: true,
          },
        ];
      }
    },
  };
  
  export default nextConfig;
  