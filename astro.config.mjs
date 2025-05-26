import { defineConfig } from "astro/config";
import paraglide from "@inlang/paraglide-astro"
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    // Use astro's i18n routing for deciding which language to use
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: true
    }
},

integrations: [
    paraglide({
        // recommended settings
        project: "./project.inlang",
        outdir: "./src/paraglide", //where your files should be
    }),
],

output: 'server',
adapter: vercel({
  edgeMiddleware: false,
  imageService: true,
  devImageService: 'sharp',
  imagesConfig: {                                                                                               
    sizes: [400, 640, 750, 828, 1080, 1200, 1920],                                                                   
    domains: [],                                                                                                
    formats: ['image/webp'],                                                                                    
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },                  
}),
});
