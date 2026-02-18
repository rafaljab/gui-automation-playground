import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/gui-automation-playground/',
    server: {
        open: true,
    },
    build: {
        outDir: 'dist',
    },
});
