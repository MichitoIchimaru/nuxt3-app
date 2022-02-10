import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    srcDir: "src/client/",
    serverMiddleware: [
        {
            path: "/api",
            handler: "~~/src/server/index.ts"
        }
    ]
})
