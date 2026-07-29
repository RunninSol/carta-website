import { withBotId } from "botid/next/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "travelbycarta.com" }],
        destination: "https://www.travelbycarta.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withBotId(nextConfig);
