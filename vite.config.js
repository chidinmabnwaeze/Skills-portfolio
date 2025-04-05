import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //temporarily configure the port to avoid cors errors
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5380",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
