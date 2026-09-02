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
      preset: process.env["NITRO_PRESET"] || "cloudflare_pages",
      compressPublicAssets: true,
      minify: true,
      routeRules: {
        "/**": {
          headers: {
            Link: '</llms.txt>; rel="describedby"; type="text/plain", </.well-known/llms.txt>; rel="describedby"; type="text/plain", </sitemap.xml>; rel="sitemap"; type="application/xml"',
          },
        },
        "/Shreya%20Chaudhary%20Makeup%20Catalog.pdf": {
          redirect: { to: "/shreya-chaudhary-makeup-catalog.pdf", status: 301 },
        },
        "/Shreya Chaudhary Makeup Catalog.pdf": {
          redirect: { to: "/shreya-chaudhary-makeup-catalog.pdf", status: 301 },
        },
      },
    }),
    viteReact(),
    {
      name: "legacy-catalog-redirect",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const rawUrl = req.url || "";
          try {
            const decoded = decodeURIComponent(rawUrl);
            if (
              rawUrl.includes("Shreya%20Chaudhary%20Makeup%20Catalog.pdf") ||
              decoded.includes("Shreya Chaudhary Makeup Catalog.pdf")
            ) {
              res.writeHead(301, { Location: "/shreya-chaudhary-makeup-catalog.pdf" });
              res.end();
              return;
            }
          } catch {
            // fallback if decode fails
          }
          next();
        });
      },
    },
    {
      name: "agent-markdown-dev-middleware",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const accept = req.headers.accept || "";
          if (accept.includes("text/markdown")) {
            try {
              const { getMarkdownForRoute } = await server.ssrLoadModule(
                "./src/lib/agent-markdown.ts",
              );
              const md = getMarkdownForRoute(req.url || "/");
              const tokenCount = Math.ceil(md.length / 4);
              res.setHeader("Content-Type", "text/markdown; charset=utf-8");
              res.setHeader("x-markdown-tokens", String(tokenCount));
              res.setHeader("Vary", "Accept");
              res.end(md);
              return;
            } catch (err) {
              console.error("Agent markdown dev middleware error:", err);
            }
          }
          next();
        });
      },
    },
  ],
});
