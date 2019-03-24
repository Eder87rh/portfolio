<template>
  <div id="app">
    <Header />
    <router-view />
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
//don't delete this comment
</style>
