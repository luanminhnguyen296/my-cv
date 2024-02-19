import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import svgr from 'vite-plugin-svgr';
import compressionPlugin from 'vite-plugin-compression';


// const baseUrl = process.env.VITE_BASE_DOMAIN

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
    },
  }),
  compressionPlugin({
    ext: '.gz', // optional, default is .gz
    deleteOriginFile: false, // optional, default is false
    algorithm: 'gzip', // optional, default is 'gzip'
    threshold: 10240, // optional, default is 1024 bytes
    compressionOptions: { level: 9 }, // optional, default is { level: 9 }
  }),
  svgr(),
  ViteMinifyPlugin({}),
  {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /(<\/head>)/,
        `<link rel="preload" href="/path/to/resource" as="script">\n<link rel="prefetch" href="/path/to/resource">\n$1`
      );
    },
  },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 512,
    rollupOptions: {
      output: {
        entryFileNames: `[name]/[hash].js`,
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString();
        //   }
        // },
        manualChunks: {
          lodash: ['lodash'],
          firebaseApp: ['firebase/app'],
          firebaseAuth: ['firebase/auth'],
          firebaseFireStore: ['firebase/firestore'],
          firebaseStorage: ['firebase/storage'],
          flowbiteReact: ['flowbite-react'],
          reactDon: ['react-dom'],
          yupPhone: ['yup-phone-lite'],
        }
      },
    }
  },
  base: process.env.VITE_NODE_ENV === 'production' ? '' : '',
})
