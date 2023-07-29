<template>
  <footer>
    <div class="footer-left">
      <ShortlyText />
    </div>
    <div class="footer-center">
      <FooterRow class="row-1" :rowTitle="'Features'" :items="rowItemsOne" />
      <FooterRow class="row-2" :rowTitle="'Resources'" :items="rowItemsTwo" />
      <FooterRow class="row-3" :rowTitle="'Company'" :items="rowItemsThree" />
    </div>
    <div class="footer-right">
      <div
        v-for="(icon, index) in socialMediaIcons"
        class="social-media-icon-container"
      >
        <img :src="icon" :alt="formatAlt(socialMediaIcons[index])" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import ShortlyText from "../components/custom-components/ShortlyText.vue";
import FooterRow from "../components/custom-components/FooterRow.vue";
import { Component } from "vue";

export default {
  data() {
    return {
      rowItemsOne: [
        "Link Shortening",
        "Branded Links",
        "Analytics",
      ] satisfies string[],
      rowItemsTwo: ["Blog", "Developers", "Support"] satisfies string[],
      rowItemsThree: ["About", "Our Team", "Careers", "Contact"] satisfies string[],
      socialMediaIcons: [
        "images/icon-facebook.svg",
        "images/icon-twitter.svg",
        "images/icon-pinterest.svg",
        "images/icon-instagram.svg",
      ] satisfies string[],
    };
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ShortlyText: ShortlyText satisfies Component,
    FooterRow: FooterRow satisfies Component,
  },
  methods: {
    formatAlt(text: string): string {
      return text.replace("../public/images/icon-", "").replace(".svg", "");
    },
  },
};
</script>
