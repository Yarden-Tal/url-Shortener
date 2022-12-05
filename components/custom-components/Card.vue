<template>
  <div class="card-container">
    <hr v-show="!isFirst" class="card-hr" />
    <div :class="{ 'first-card-top': isFirst }">
      <img :src="image" :alt="title" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  computed: {
    isFirst(): boolean {
      if (this.title === "Brand Recognition") return true;
      else return false;
    },
  },
};
</script>
