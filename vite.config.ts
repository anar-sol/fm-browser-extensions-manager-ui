import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/fm-browser-extensions-manager-ui/",
  plugins: [react(), svgr(), tailwindcss(),],
})
