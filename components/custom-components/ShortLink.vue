<template>
  <div class="link-container">
    <div class="link-original">
      <p>{{ originalLink }}</p>
    </div>
    <div class="link-shortened">
      <p>{{ shortenedLink }}</p>
      <button
        class="copy-btn"
        :class="{ 'copied-btn': copied }"
        @click="handleCopy"
      >
        {{ buttonTxt }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      copied: false as boolean,
    };
  },
  methods: {
    handleCopy(): void {
      this.copyURL(this.shortenedLink);
      this.copied = true;
      setTimeout((): boolean => (this.copied = false), 1500);
    },
    async copyURL(url: string): Promise<void> {
      try {
        const { clipboard } = navigator;
        await clipboard.writeText(url);
      } catch (e) {
        alert(e);
      }
    },
  },
  computed: {
    buttonTxt(): string {
      return this.copied ? "Copied!" : "Copy";
    },
    originalLink(): string {
      return this.result![0];
    },
    shortenedLink(): string {
      return this.result![1];
    },
  },
  props: {
    result: {
      type: Array<string>,
    },
  },
};
</script>
