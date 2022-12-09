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
        <button @click="handleClick" class="hamburger-btn">
          <img src="/images/hamburger.svg" alt="Menu" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>
