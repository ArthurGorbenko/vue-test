<template>
  <div class="home">
    <Albums msg="Albums component" />
  </div>
</template>

<script>
// @ is an alias to /src
import Albums from "@/components/Albums.vue";

export default {
  name: "Home",
  components: {
    Albums
  }
};
</script>
