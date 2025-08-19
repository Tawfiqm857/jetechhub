import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Vite configuration tailored for GitHub Pages
export default defineConfig(({ mode }) => ({
  base: "/jetechhub/",  //  Must match your repo name exactly
  server: {
    host: "::",
    port: 5173,          // Default port—modify if needed
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
