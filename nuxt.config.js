const site = {
  title: 'Teamwork Plan',
  description: 'Teamwork section with the plan presentation and a simple accordion functionality.',
  url: 'https://teamwork-plan.vercel.app',
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: site.title,
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: site.description },
      { hid: 'author', name: 'author', content: 'revert@revert.pl' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#1D1D38' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nuxt_js' },

      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:site_name', content: 'teamwork-plan.vercel.app' },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:image', content: site.url+'/ogimage.webp' },
      { property: 'og:url', content: site.url },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon/android-chrome-512x512.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'canonical', href: site.url },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FC67C7' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/styles.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-modules/google-fonts
    '@nuxtjs/google-fonts',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: site.title,
      short_name: 'T. Plan',
      description: site.description,
      icons: [
        {
          src: '/favicon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/favicon/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      theme_color: '#1D1D38',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
    },
    icon: {
      fileName: 'favicon.ico',
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Google Fonts
  googleFonts: {
    families: {
      'Work+Sans': {
        wght: [400, 500, 600],
      },
    },
    display: 'swap',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        stage: 3,
      },
    },
  },
}
