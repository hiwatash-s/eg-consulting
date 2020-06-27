
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '性格診断でおすすめエロゲをコンサルティング',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'あなただけにオススメのエロゲ(美少女ゲーム)を診断・手配します。あなたの趣味嗜好から診断させて頂きます。往年の名作から最新作まで幅広くオススメエロゲを紹介します。' },
      { name: 'google-site-verification', content: 'gkQ_XG1S0wMupO325Qzh3A8UMESl4xaeh6ElJF1QLkw' },  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ress/dist/ress.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Philosopher'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'},
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
    '@nuxtjs/sitemap',
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
    fallback: true,
    routes: [
      '/question',
      '/answer/naki',
      '/answer/gimmick',
      '/answer/normal',
      '/answer/abnormal',
      '/answer/rpg',
      '/answer/slg',
      '/answer/moe',
      '/answer/gyagu',
    ],
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.eg-consulting.info',
    gzip: true,
    exclude: [],
    routes: [
      '/question',
      '/answer/naki',
      '/answer/gimmick',
      '/answer/normal',
      '/answer/abnormal',
      '/answer/rpg',
      '/answer/slg',
      '/answer/moe',
      '/answer/gyagu',
    ]
  }
}
