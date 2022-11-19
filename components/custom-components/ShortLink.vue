<template>
  <div class="link-container">
    <div class="link-left-side">
      <p>{{}}</p>
    </div>
    <div class="link-right-side">
      <p>{{}}</p>
      <button>{{ buttonTxt }}</button>
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
  computed: {
    buttonTxt() {
      this.copied ? "Copied!" : "Copy";
    },
  },
  // props: {
  //     url: {
  //         type: String,
  //     },
  // },
};
</script>
