import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ Import Tailwind Vite Plugin

export default defineConfig({
  plugins: [react(), tailwindcss()], // ✅ Add Tailwind Plugin
});
