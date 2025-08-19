import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/jetechhub/", // 👈 IMPORTANT: use your repo name here
  server: {
    host: "::",
    port: 5173, // or any port you prefer
  },
  plugins: [
    react(),
    // if you only want componentTagger in dev mode
    mode === "development" && (await import("lovable-tagger")).componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
