<template>
  <div class="card-container">
    <div><img :src="image" :alt="title" /></div>
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
};
</script>
