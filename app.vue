<template>
  <div>
    <Header
      :isMobile="isMobile"
      :menuIsOpen="menuIsOpen"
      @clicked="toggleMenu"
    />
    <Main :isMobile="isMobile" :menuIsOpen="menuIsOpen" />
    <Footer :isMobile="isMobile" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      menuIsOpen: false satisfies boolean,
      mobileBreakpoint: 580 satisfies number,
      isMobile: true satisfies boolean,
    };
  },
  methods: {
    checkScreenWidth(): boolean {
      return (this.isMobile = window.innerWidth <= this.mobileBreakpoint);
    },
    toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
