import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mnm-wedding-invite/', // <-- important for GitHub Pages
  plugins: [react()],
});
