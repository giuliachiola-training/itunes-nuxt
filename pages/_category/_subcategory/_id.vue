<template>
  <div  class="content--centered">
    <h2>(Siamo nel file di terzo livello)
      <br> pages > _category > _subcategory > _id.vue
    </h2>
    <h1>route.params:</h1>
    <p>first: <span class="route-highlight">{{ this.$route.params.category }}</span></p>
    <p>second: <span class="route-highlight">{{ this.$route.params.subcategory }}</span></p>
    <p>third: <span class="route-highlight">{{ this.$route.params.id }}</span></p>

    <hr>
    <h3>Results for {{ $route.params.id }}</h3>
    <div v-if="movieExists">
      <div v-for="(movie, index) in filteredMovieData" :key="index">
        <card
          :key="movie.trackName"
          :title="movie.trackName"
          :artistName="movie.artistName"
          :image="movie.artworkUrl100"
          :url="movie.previewUrl"
          :color="picker(index)"
        />
      </div>
    </div>
    <p v-else>Movie does not exist.</p>
  </div>
</template>

<script>
import axios from 'axios'

import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },

  asyncData({params}) { // facendo così non sto utilizzando lo store!
    return axios.get(`https://itunes.apple.com/search?country=${params.category}&term=${params.id}&media=movie`)
    .then((response) => {
      console.log(response)
      // al posto della commit sullo store faccio:
      return  { movieData: response.data.results } // async crea la variabile albumData
    })
  },

  computed: {
    movieExists () {
      return this.filteredMovieData.length > 0
    },

    filteredMovieData () {
      return this.movieData.filter(movie => movie.primaryGenreName.toLowerCase() === this.$route.params.subcategory.toLowerCase())
    }
  },

  methods: {
    picker (index) {
      return index % 2 == 0 ? 'orange' : 'yellow'
    }
  }
}
</script>

<style>
.content--centered {
  text-align: center;
}

.route-highlight {
  font-weight: bold;
  font-size: 2em;
  color: darkorange;
}
</style>
