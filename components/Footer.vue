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
      ] as string[],
      rowItemsTwo: ["Blog", "Developers", "Support"] as string[],
      rowItemsThree: ["About", "Our Team", "Careers", "Contact"] as string[],
      socialMediaIcons: [
        "images/icon-facebook.svg",
        "images/icon-twitter.svg",
        "images/icon-pinterest.svg",
        "images/icon-instagram.svg",
      ] as string[],
    };
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ShortlyText: ShortlyText as Component,
    FooterRow: FooterRow as Component,
  },
  methods: {
    formatAlt(text: string): string {
      return text.replace("../public/images/icon-", "").replace(".svg", "");
    },
  },
};
</script>
