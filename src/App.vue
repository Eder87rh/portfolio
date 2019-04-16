<template>
  <div id="app">
    <Header />

    <main class="content">
      <router-view />
    </main>
    <footer class="footer">
      <p class="footer__copyright">
        &copy; Copyright {{ this.year }} by Eder Ramírez Hernández. This project
        was created using Vue.js, Grid CSS and Firebase.
      </p>
    </footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
//import NavContent from "@/components/NavContent";

export default {
  components: {
    Header
    // NavContent
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss">
//don't delete this comment
</style>
