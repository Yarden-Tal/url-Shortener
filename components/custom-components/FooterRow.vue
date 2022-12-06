<template>
  <div class="footer-row">
    <div class="footer-row-title">{{ rowTitle }}</div>
    <ul class="footer-row-items">
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array<string>,
    },
    rowTitle: { type: String },
  },
};
</script>
