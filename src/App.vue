<template>
  <div id="app">
    <Header />
    <NavContent />
    <main class="content">
      <router-view />
    </main>
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import NavContent from "@/components/NavContent";

export default {
  components: {
    Header,
    NavContent
  }
};
</script>

<style lang="scss">
//don't delete this comment
</style>
