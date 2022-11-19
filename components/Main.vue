<template>
  <main>
    <section class="get-started-section">
      <h1>More than just shorter links</h1>
      <p>
        Build your brands recognition and get detailed insights on how your
        links are performing.
      </p>
      <GetStartedButton />
    </section>

    <section class="form-section">
      <div class="form-container">
        <input
          type="text"
          placeholder="Shorten a link here..."
          v-model="inputUrl"
        />
        <button @click="handleClick">Shorten It!</button>
      </div>
    </section>

    <section class="results-section">
      <!-- <ShortLink v-for="(link, i) in links" class="" />  -->
    </section>

    <section class="adv-statistics-section">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </section>

    <section class="feature-cards-section">
      <Card
        v-for="(_card, i) in cardImages"
        :image="cardImages[i]"
        :title="cardTitles[i]"
        :text="cardTexts[i]"
      />
    </section>

    <section class="boost-today-section">
      <div>Boost your links today</div>
      <GetStartedButton />
    </section>
  </main>
</template>

<script lang="ts">
import { Component } from "vue";
import GetStartedButton from "../components/custom-components/GetStartedButton.vue";
import Card from "../components/custom-components/Card.vue";
import ShortLink from "../components/custom-components/ShortLink.vue";
import getData from "../api/api";

export default {
  data() {
    return {
      inputUrl: "",
      cardImages: [
        "images/icon-brand-recognition.svg",
        "images/icon-detailed-records.svg",
        "images/icon-fully-customizable.svg",
      ] as string[],
      cardTitles: [
        "Brand Recognition",
        "Detailed Records",
        "Fully Customizable",
      ] as string[],
      cardTexts: [
        `Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.`,
        `Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.`,
        `Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.
`,
      ] as string[],
    };
  },
  components: {
    GetStartedButton: GetStartedButton as Component,
    Card: Card as Component,
    ShortLink: ShortLink as Component,
  },
  methods: {
    handleClick(): void {
      getData(this.inputUrl);
      this.inputUrl = "";
    },
    handleInput(text: string): string {
      return (this.inputUrl = text);
    },
  },
};
</script>
