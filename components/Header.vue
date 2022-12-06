<template>
  <header>
    <nav>
      <div class="nav-left-side">
        <a href="#" class="nav-logo"
          ><img src="/images/logo.svg" alt="Shortly"
        /></a>
        <!-- v-if DESKTOP -->
        <ul class="nav-left-side-desktop">
          <li><button>Features</button></li>
          <li><button>Pricing</button></li>
          <li><button>Resources</button></li>
        </ul>
      </div>

      <div class="nav-right-side">
        <!-- v-if DESKTOP -->
        <ul>
          <li><button>Login</button></li>
          <li><button>Sign Up</button></li>
        </ul>
        <!-- v-if MOBILE -->
        <!-- CHANGE BOOL !! -->
        <button @click="toggleMenu" class="hamburger-btn">
          <img src="/images/hamburger.svg" alt="Menu" />
        </button>
        <!-- CHANGE BOOL !! -->
        <DropdownMenu v-show="menuIsOpen" />
        <!-- CHANGE BOOL !! -->
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component } from "vue";
import DropdownMenu from "./header/DropdownMenu.vue";

export default {
  data() {
    return {
      menuIsOpen: false as boolean,
    };
  },
  methods: {
    toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  components: {
    DropdownMenu: DropdownMenu as Component,
  },
};
</script>
