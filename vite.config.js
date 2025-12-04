import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // important for Netlify — ensures correct asset paths
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
