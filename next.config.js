/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: true },
    compiler: { styledComponents: true },
}

module.exports = nextConfig