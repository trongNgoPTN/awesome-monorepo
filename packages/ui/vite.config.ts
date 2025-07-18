import react from '@vitejs/plugin-react-swc';
import { defineConfig, type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
  },
} as UserConfig);
