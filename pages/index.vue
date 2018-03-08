<template>
  <div>
    <!-- https://www.youtube.com/watch?v=vVVgB5fZJy0&list=PL-lxoPS_1OXUimhJugWZ4bLeno-SWHqA_ -->
    <h1>Search iTunes</h1>
    <br>

    <h2>Search song</h2>
    <form @submit.prevent="submit">
      <input
        type="text"
        placeholder="Enter artist name"
        v-model="search"
        autofocus>
    </form>

    <hr class="separator">

    <h2>Search movie</h2>
    <form class="movie-form">

      <div>
        <label>Country</label>
        <input
          type="text"
          placeholder="es. it"
          v-model="country"
          autofocus>
      </div>

      <div>
        <label :class="isGenreHidden ? 'is-hidden' : ''">Genre</label>
        <input
          type="text"
          placeholder="es. commedia"
          v-model="genre"
          :class="isGenreHidden ? 'is-hidden' : ''"
          autofocus>
      </div>

      <div>
        <label :class="isNameHidden ? 'is-hidden' : ''">Title</label>
        <input
          type="text"
          placeholder="es. truffa"
          v-model="name"
          :class="isNameHidden ? 'is-hidden' : ''"
          @keyup.enter="filteredSearch"
          autofocus>
      </div>

    </form>

    <h4>Esempi da provare:</h4>
    <table>
      <tr v-for="example in examples" :key="example.title">
        <td>{{ example.country }}</td>
        <td>{{ example.genre }}</td>
        <td>{{ example.title }}</td>
      </tr>
    </table>

  </div>
</template>

<script>

export default {
  components: {

  },

  data () {
    return {
      search: '',
      country: '',
      genre: '',
      name: '',
      isGenreHidden: true,
      isNameHidden: true,
      examples: [
        {
          country: 'it',
          genre: 'commedia',
          title: 'truffa'
        },
        {
          country: 'us',
          genre: 'comedy',
          title: 'man'
        },
        {
          country: 'it',
          genre: 'drammatico',
          title: 'cena'
        }
      ]
    }
  },

  watch: {
    country () {
      if (this.country !== '') {
        this.isGenreHidden = false
      }
    },

    genre () {
      if (this.genre !== '') {
        this.isNameHidden = false
      }
    }
  },

  methods: {
    submit (event) {
      this.$router.push(`results/${this.search}`)
    },

    filteredSearch () {
      this.$router.push(`${this.country}/${this.genre}/${this.name}`)
      // NON FUNZIONA SE IL SECONDO PARAMETRO E' VUOTO
    }
  }
}
</script>

<style lang="scss">
* {
  text-align: center;
}

h1 {
  padding: 20px;
}

.separator {
  margin: 2em 0;
}

.movie-form {
  margin: 1em;
  padding: 1em;
  border: 1px solid lavenderblush;
}

.is-hidden {
  display: none;
}

table {
  margin: auto;

  td {
    border: 1px solid lavenderblush;
    text-align: left;
    width: 200px;
    padding: 10px;
  }
}
</style>
