// @ts-check
import { defineConfig } from 'astro/config';
import angular from '@analogjs/astro-angular';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://fina-estampa.com',
    integrations: [angular(), sitemap(), icon()],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: ['@angular/**', 'lucide-angular']
        }
    }
});
