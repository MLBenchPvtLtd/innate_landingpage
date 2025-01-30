import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async redirects() {
        if (process.env.NEXT_PUBLIC_ENV === 'development') {
            return [];
        }
        else {
            console.log('Redirect applied for all paths to https://www.innate-nw.com/:path*')
            return [
                {
                    source: '/:path*',
                    destination: 'https://www.innate-nw.com/:path*',
                    permanent: true,
                },
            ];
        }
    },
};

export default nextConfig;