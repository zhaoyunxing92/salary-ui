import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver(),
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        }
    },
    base: "./",
    build: {
        target: 'modules',
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser', // 混淆器
        // https://github.com/cklwblove/blog/issues/85
        // rollupOptions: {
        //     output: {
        //         entryFileNames: '[name]-[hash]',
        //         chunkFileNames: 'js/[name]-[hash].js',
        //         assetFileNames: '[ext]/[name]-[hash][extname]',
        //         manualChunks:{
        //             'vue-vendor':['vue','vue-router']
        //         }
        //     }
        // }
    },

    server: {
        port: 3000,
        open: true,
        cors: true
    }
})