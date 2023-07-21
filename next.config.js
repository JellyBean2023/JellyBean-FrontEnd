/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    experimental: { 
        esmExternals: true,
        styledComponent: true
     },
    compiler: { styledComponents: true },
    env: {SESSION_SECRET: 'your-session-secret',},
}

require('dotenv').config();

module.exports = nextConfig