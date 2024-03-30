import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      "chunk-4YP5LC2O.js",
      "chunk-P2LSHJDD.js",
      "chunk-75H4GELE.js",
      "chunk-P2LSHJDD.js?v=7e14b291",
      "chunk-75H4GELE.js?v=7e14b291",
      // Add any other problematic dependencies here
    ],
  },
});
