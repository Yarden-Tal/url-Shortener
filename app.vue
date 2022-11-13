<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";

export default {
  components: {
    Header: Header,
  },
};
</script>

<style lang="scss">
@import "@/assets/common";
</style>
