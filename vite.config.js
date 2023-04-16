import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  // server: {
  //   proxy: {
  //     // forward `/uploads/` endpoint to -> `http://localhost:5000/uploads/`
  //     "^/assets": {
  //       target: "http://127.0.0.1:5173/",
  //     },
  //   },
  // },
});
