/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: false,
    experimental: { 
        esmExternals: true
     },
    compiler: { styledComponents: true },
    env: {SESSION_SECRET: 'your-session-secret',},
}

require('dotenv').config();

module.exports = nextConfig