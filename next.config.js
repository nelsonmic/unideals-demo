/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            dangerouslyAllowSVG: true,
            remotePatterns: [
                  {
                        protocol: 'https',
                        hostname: 'cdn.studentbeans.com',
                        port: '',
                        pathname: '/static/web/assets/images/**'
                  },
                  {
                        protocol: 'https',
                        hostname: 'cdn.studentbeans.com',
                        port: '',
                        pathname: '/offers/brands/logos/**'
                  }
                  ,
                  {
                        protocol: 'https',
                        hostname: 'cdn.studentbeans.com',
                        port: '',
                        pathname: '/offers/redemption_types/default_images/**'
                  },
                  {
                        protocol: 'https',
                        hostname: "www.studentbeans.com",
                        port: '',
                        pathname: '/blog/wp-content/uploads/**'
                  },
                  {
                        protocol: 'https',
                        hostname: 'd34e3vwr98gw1q.cloudfront.net',
                        port: '',
                        pathname: '/**'
                  }
            ]
      }
}
module.exports = nextConfig
