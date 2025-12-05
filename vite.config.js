// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // root del progetto (dove sta index.html)

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        chiSono: "chi-sono.html",
        consulenzeUnity: "consulenze-unity.html",
        eventiGruppi: "eventi-gruppi.html",
        percorsiReiki: "percorsi-reiki.html",
        contatti: "contatti.html",
      },
    },
  },
});
