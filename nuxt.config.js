
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'EG Consulting',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'あなただけにオススメの美少女ゲーム(エロゲ)を手配します' },
      { name: 'keyword', content: 'エロゲー,エロゲ,オススメ,診断' },  
      { name: 'google-site-verification', content: 'gkQ_XG1S0wMupO325Qzh3A8UMESl4xaeh6ElJF1QLkw' },  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ress/dist/ress.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Philosopher'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&family=Sawarabi+Mincho&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true
  }
}
