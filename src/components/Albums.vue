<template>
  <h1>{{ msg }}</h1>
  <div class="photos" v-for="photo in photos" v-bind:key="photo">
    <h2>{{ photo.title }}</h2>
    <img :src="photo.thumbnailUrl" />
  </div>
  <button @click="handleClick">Load more</button>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Albums",
  props: {
    msg: String,
  },
  mounted() {
    this.fetchPhotos();
  },
  methods: {
    ...mapActions(["fetchPhotos"]),
    handleClick() {
      this.fetchPhotos();
    },
  },
  computed: mapState({
    photos: (state) => state.photos,
    page: (state) => state.page,
  }),
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
