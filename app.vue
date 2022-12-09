<template>
  <div>
    <Header @clicked="toggleMenu" />
    <Main :menuIsOpen="menuIsOpen" />
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuIsOpen: false as boolean,
    };
  },
  methods: {
    toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
