import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// Custom plugin: tell Vite/OXC to treat .js files as JSX
// This is needed because the codebase uses .js extension for React components
const jsxInJsPlugin = {
  name: "jsx-in-js",
  enforce: "pre",
  transform(code, id) {
    if (id.endsWith(".js") && !id.includes("node_modules")) {
      // Use the React plugin's babel transform by returning the code
      // with a hint that it should be treated as JSX
      return { code, map: null };
    }
  },
};

export default defineConfig({
  plugins: [
    {
      name: "treat-js-as-jsx",
      enforce: "pre",
      async transform(code, id) {
        // Only transform project .js files (not node_modules)
        if (!id.includes("node_modules") && id.endsWith(".js")) {
          const { transformAsync } = await import("@babel/core");
          const result = await transformAsync(code, {
            filename: id,
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: [],
            sourceMaps: true,
          });
          return { code: result.code, map: result.map };
        }
      },
    },
    react(),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.js"],
    include: ["**/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: ["node_modules", ".next"],
    coverage: {
      reporter: ["text", "lcov"],
      exclude: ["node_modules", ".next", "**/__tests__/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
