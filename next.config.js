

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bk-ecommerce.vercel.app",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/**",
            },
            // {
            //     protocol: "https",
            //     hostname: "todo-application-ten.vercel.app",
            //     port: "",
            //     pathname: "/**",
            // },
            // {
            //     protocol: "https",
            //     hostname: "lh3.googleusercontent.com",
            //     port: "",
            //     pathname: "/**",
            // },
        ],
    }
}

module.exports = nextConfig
