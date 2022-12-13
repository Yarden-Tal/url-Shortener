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
      menuIsOpen: false as boolean,
      mobileBreakpoint: 580 as number,
      isMobile: true as boolean,
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
    window.onresize = this.checkScreenWidth;
  },
  destroyed() {
    window.onresize = this.checkScreenWidth;
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
