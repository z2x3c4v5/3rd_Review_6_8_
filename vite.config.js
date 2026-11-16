import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 는 https://<아이디>.github.io/<레포이름>/ 아래에서 열리므로 상대 경로로 빌드
  base: './',
  server: { host: true },
});
