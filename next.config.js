/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    experimental: { esmExternals: true },
    compiler: { styledComponents: true },
}

module.exports = nextConfig