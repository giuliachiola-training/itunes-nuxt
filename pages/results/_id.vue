<template>
  <div>
    <h3>Results for <h1>{{ $route.params.id }}</h1> </h3>
    <!-- {{ $store.state.albums }} -->
    <!-- {{ albumData }} -->
    <div v-if="albumExists">
      <div v-for="(album, index) in albumData" :key="index">
        <card
          :key="album.collectionCensoredName"
          :title="album.collectionCensoredName"
          :artistName="album.artistName"
          :image="album.artworkUrl100"
          :url="album.artistViewUrl"
          :color="picker(index)"
        />
      </div>
    </div>
    <p v-else>Album does not exist.</p>
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
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((response) => {
      // al posto della commit sullo store faccio:
      return  { albumData: response.data.results } // async crea la variabile albumData
    })
  },

  middleware: 'search', // special option in pages

  computed: {
    albumExists () {
      return this.albumData.length > 0
    }
  },

  methods: {
    picker (index) {
      return index % 2 == 0 ? 'red' : 'blue'
    }
  }
}
</script>
