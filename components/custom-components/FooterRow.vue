<template>
  <div class="">
    <div>{{ rowTitle }}</div>
    <ul>
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
