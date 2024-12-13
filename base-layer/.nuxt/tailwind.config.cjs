// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at 12/13/2024, 11:45:34 AM
const configMerger = require("/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/node_modules/@nuxtjs/tailwindcss/dist/runtime/merger.js");

const inlineConfig = {"content":[],"theme":{"extend":{}},"plugins":[],"darkMode":"class"};

const config = [
require("./nuxtui-tailwind.config.cjs")
].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: { files: ["/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/components/**/*.{vue,js,jsx,mjs,ts,tsx}","./components/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/pages/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/plugins/**/*.{js,ts,mjs}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/composables/**/*.{js,ts,mjs}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/utils/**/*.{js,ts,mjs}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}","/Users/joshuabriley/Documents/personal/nuxt-apps/my-turborepo/base-layer/app.config.{js,ts,mjs}"] } }));

module.exports = (() => {const cfg=config;cfg["theme"]["extend"]["colors"] = {};cfg["theme"]["extend"]["colors"]["primary"] = {"50":"rgb(var(--color-primary-50) / <alpha-value>)","100":"rgb(var(--color-primary-100) / <alpha-value>)","200":"rgb(var(--color-primary-200) / <alpha-value>)","300":"rgb(var(--color-primary-300) / <alpha-value>)","400":"rgb(var(--color-primary-400) / <alpha-value>)","500":"rgb(var(--color-primary-500) / <alpha-value>)","600":"rgb(var(--color-primary-600) / <alpha-value>)","700":"rgb(var(--color-primary-700) / <alpha-value>)","800":"rgb(var(--color-primary-800) / <alpha-value>)","900":"rgb(var(--color-primary-900) / <alpha-value>)","950":"rgb(var(--color-primary-950) / <alpha-value>)","DEFAULT":"rgb(var(--color-primary-DEFAULT) / <alpha-value>)"};cfg["theme"]["extend"]["colors"]["cool"] = {"50":"#f9fafb","100":"#f3f4f6","200":"#e5e7eb","300":"#d1d5db","400":"#9ca3af","500":"#6b7280","600":"#4b5563","700":"#374151","800":"#1f2937","900":"#111827","950":"#030712"};cfg["theme"]["extend"]["colors"]["gray"] = {"50":"rgb(var(--color-gray-50) / <alpha-value>)","100":"rgb(var(--color-gray-100) / <alpha-value>)","200":"rgb(var(--color-gray-200) / <alpha-value>)","300":"rgb(var(--color-gray-300) / <alpha-value>)","400":"rgb(var(--color-gray-400) / <alpha-value>)","500":"rgb(var(--color-gray-500) / <alpha-value>)","600":"rgb(var(--color-gray-600) / <alpha-value>)","700":"rgb(var(--color-gray-700) / <alpha-value>)","800":"rgb(var(--color-gray-800) / <alpha-value>)","900":"rgb(var(--color-gray-900) / <alpha-value>)","950":"rgb(var(--color-gray-950) / <alpha-value>)"};;return cfg;})()
