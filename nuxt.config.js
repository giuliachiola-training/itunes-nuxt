const axios = require('axios')

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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: ['~plugins/vuetify.js'],

  css: ['~assets/app.scss'],

  loading: { color: '#3B8070' },
  presets: ['vue-app'],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify', 'babel-polyfill', 'eventsource-polyfill'],
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
  },

  generate: {
    routes: [
      '/results/taylor%20swift',
      '/results/queens',
      '/results/davidguetta'
    ],
    routes: function () {
      let artist = 'queens' // STATICO
      return axios.get(`https://itunes.apple.com/search?term=${artist}&entity=album`)
        .then((res) => {
          return res.data.results.map((artist) => {
            return '/results/' + artist.artistName
          })
        })
    }
  }
}
