/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    API_KEY: process.env.REACT_APP_API_KEY,
    API_URL: process.env.REACT_APP_API_URL,
  },
};

module.exports = nextConfig;
