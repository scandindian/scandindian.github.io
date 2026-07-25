import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Deployed to https://scandindian.github.io/ (user page) — base is root "/".
export default defineConfig({
    base: "/",
    plugins: [react()],
    build: {
        outDir: "dist",
    },
});
