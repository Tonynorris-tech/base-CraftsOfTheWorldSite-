import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/crafts-of-the-world/", // 👈 your repo name EXACTLY
});
