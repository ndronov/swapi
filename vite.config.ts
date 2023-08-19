/// <reference types="vite-plugin-svgr/client" />

import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteAliases } from 'vite-aliases';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), ViteAliases({ useConfig: false, prefix: '@' }) as unknown as Plugin],
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    },
  },
  base: '/swapi/',
});
