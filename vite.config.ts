import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    process: {
      env: {
        NODE_ENV: "production",
      },
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.widget.tsx"),
      name: "CaasWidget",
      formats: ["iife"],
      fileName: () => "bundle.js",
    },
    
  },
});