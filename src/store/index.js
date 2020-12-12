import { createStore } from "vuex";

export default createStore({
  state: {
    photos : [],
    page : 0,
  },
  mutations: {
    setPhotos (state,payload) {
       state.photos = [...state.photos, ...payload];
      },
    incrementPage (state) {
       state.page += 5;
      }
  },
  actions: {
    fetchPhotos ({commit, state : {page}}) {
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        commit("setPhotos", data.slice(page,page+5));
        commit("incrementPage");
      });
    }
  },
  modules: {}
});
