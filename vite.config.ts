import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "",
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    assetsInlineLimit: 0,
    minify: true,
    outDir: 'dist',
    cssCodeSplit: true,
    sourcemap: false,
    modulePreload: {
      polyfill: false,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
