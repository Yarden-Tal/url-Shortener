<template>
  <main>
    <section class="get-started-section">
      <div class="get-started-left">
        <h1>More than just shorter links</h1>
        <p class="get-started-txt">
          Build your brands recognition and get detailed insights on how your
          links are performing.
        </p>
        <GetStartedButton @click="focusOnInput" />
      </div>
      <div class="get-started-right">
        <DropdownMenu v-if="isMobile" v-show="menuIsOpen" />
        <img
          v-if="!isMobile"
          v-show="!menuIsOpen"
          src="/images/illustration-working.svg"
          alt="Working"
        />
      </div>
    </section>

    <section class="form-section">
      <div class="form-container">
        <input
          ref="urlInput"
          @keyup.enter="handleSubmit"
          :class="{ 'empty-input-error': inputIsEmpty || inputIsInvalid }"
          type="text"
          placeholder="Shorten a link here..."
          v-model="inputUrl"
        />
        <p
          :class="{
            'error-msg': !inputIsInvalid,
            'show-error-msg': inputIsEmpty || inputIsInvalid,
          }"
        >
          {{ errorMsg }}
        </p>
        <button @click="handleSubmit">Shorten It!</button>
      </div>
    </section>

    <section class="results-section">
      <ShortLink v-for="(result, i) in resultsArray" :result="result" />
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
      <GetStartedButton @click="focusOnInput" />
    </section>
  </main>
</template>

<script lang="ts">
import { Component } from "vue";
import GetStartedButton from "../components/custom-components/GetStartedButton.vue";
import Card from "../components/custom-components/Card.vue";
import ShortLink from "../components/custom-components/ShortLink.vue";
import DropdownMenu from "../components/header/DropdownMenu.vue";
import getData from "../api/api";

export default {
  data() {
    return {
      resultsArray: [] as Array<string[]>,
      urlRegex: RegExp(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
      ),
      inputIsEmpty: false as boolean,
      inputIsInvalid: false as boolean,
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
    DropdownMenu: DropdownMenu as Component,
  },
  methods: {
    handleInput(text: string): string {
      return (this.inputUrl = text);
    },
    handleSubmit(): void {
      this.checkIfInputEmpty();
      if (this.validateUrl(this.inputUrl)) this.sendInput();
      else return;
    },
    checkIfInputEmpty(): boolean {
      if (!this.inputUrl) {
        this.inputIsEmpty = true;
        return true;
      } else {
        this.inputIsEmpty = false;
        return false;
      }
    },
    validateUrl(text: string): boolean {
      if (!this.urlRegex.test(text)) {
        this.inputIsInvalid = true;
        return false;
      } else {
        this.inputIsInvalid = false;
        return true;
      }
    },
    async sendInput(): Promise<void> {
      const res: Result = await getData(this.inputUrl);
      const { original_link, short_link } = res;
      this.resultsArray.push([original_link, short_link]);
      this.resetStates();
    },
    resetStates(): void {
      this.inputIsInvalid = false;
      this.inputIsEmpty = false;
      this.inputUrl = "";
    },
    focusOnInput(): void {
      const input = this.$refs.urlInput as HTMLInputElement;
      input.focus();
    },
  },
  computed: {
    errorMsg(): string | undefined {
      if (this.inputIsEmpty) return "Please add a link";
      if (this.inputIsInvalid) return "Please enter a valid URL";
    },
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    menuIsOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
