module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'itunes-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: ['~plugins/vuetify.js'],

  css: ['~assets/app.scss'],

  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /*
      // questo linta ogni cosa ad ogni salvataggio
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
