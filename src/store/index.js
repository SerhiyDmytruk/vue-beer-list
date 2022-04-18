import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [],
  },
  actions: {
    fetchData({ commit }) {
      const myRequest = new Request("https://api.punkapi.com/v2/beers");

      fetch(myRequest)
        .then(response => {
          return response.json();
        })
        .then(data => {
          commit("FETCH_DATA", data);
          return data.results;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    FETCH_DATA(state, post) {
      state.posts = post;
    }
  },
  getters: {
    block_data(state) {
      console.log(state.posts, 'state.posts');
      return state.posts;
    },
    getPostById: state => id => {
      id = Number(id);
      let results = state.posts.find(item => item.id === id);

      if (!id || !results) return false;

      return results
    }
  }
});

export default store;
