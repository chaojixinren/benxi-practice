// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 运行时配置（环境变量）
  runtimeConfig: {
    // 仅服务端可用
    openaiApiKey: process.env.OPENAI_API_KEY || '',
    openaiBaseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
    openaiModel: process.env.OPENAI_MODEL || 'gpt-3.5-turbo'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  css: [
    '~/assets/css/main.css',
    'leaflet/dist/leaflet.css'
  ],

  app: {
    head: {
      title: '贡物新绎 溯产助传 - 大连理工大学实践成果展示',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '大连理工大学"贡物新绎 溯产助传"实践团本溪桓仁实践成果展示' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/队徽.png' }
      ]
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  compatibilityDate: '2024-01-01'
})
