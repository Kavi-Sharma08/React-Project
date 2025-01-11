# React-Project
 
 # How to do test in vite
 Install Vitest
 Write test command in scripts
 install jsdom
 install react testing testing library

 #This is you need to write in vite.config.js
 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // Explicitly specify the runtime
    }),
  ],
});

#This is you need to write in vitest.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Ensure React DOM APIs work
  },
});
