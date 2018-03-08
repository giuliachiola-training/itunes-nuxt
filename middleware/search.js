// export default function (context) {
//   context.params.id = 'changed'
// }
import axios from 'axios'

export default function ( {params, store} ) {
  // params.id = 'changed'

  return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((response) => {
      store.commit('add', response.data.results)
    })
}
