<template>
<div class="hr-d-cter" v-show="title === 'Detailed Records'">
  <hr class="card-hr-desktop">
</div>
<div class="card-container" :class="{'second': isSecond, 'third': isThird}">
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
      return this.title === "Brand Recognition";
    },
    isSecond(): boolean {
      return this.title === "Detailed Records";
    },
    isThird(): boolean {
      return this.title === "Fully Customizable";
    }
  },
};
</script>
