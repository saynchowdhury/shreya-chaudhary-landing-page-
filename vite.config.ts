import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: process.env.NITRO_PRESET || "cloudflare_pages",
      compressPublicAssets: true,
      minify: true,
      routeRules: {
        "/**": {
          headers: {
            "Link": '</llms.txt>; rel="describedby"; type="text/plain", </.well-known/llms.txt>; rel="describedby"; type="text/plain", </sitemap.xml>; rel="sitemap"; type="application/xml"',
          },
        },
      },
      serverHandlers: [
        {
          route: "/**",
          middleware: true,
          handler: "~/server/middleware/markdown-for-agents.ts",
        },
      ],
    }),
    viteReact(),
  ],
});


