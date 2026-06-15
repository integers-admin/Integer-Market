// import path from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = fileURLToPath(new URL('.', import.meta.url))

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Disable the Next.js 15.5 devtools overlay (has RSC bundler bug with SegmentViewNode)
//   devIndicators: false,

//   // Fix workspace root detection warning (multiple lockfiles)
//   outputFileTracingRoot: path.join(__dirname, '../../../'),

//   // Serve images from src/assets (already copied to public/assets)
//   // Handle mp4 / video imports that remain in src/assets
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg)$/,
//       type: 'asset/resource',
//       generator: { filename: 'static/media/[name].[hash][ext]' },
//     })
//     return config
//   },

//   // Compiler optimisations
//   compiler: {
//     removeConsole: process.env.NODE_ENV === 'production',
//   },
// }

// export default nextConfig







/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable the Next.js dev overlay
  devIndicators: false,

  // Handle video imports
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });

    return config;
  },

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;