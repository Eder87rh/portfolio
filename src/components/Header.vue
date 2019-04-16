<template>
  <div class="header">
    <NavHeader />
    <div class="banner-texbox">
      <div class="banner-texbox__avatar"></div>
      <div class="banner-texbox__title">
        <h1 class="heading-primary margin-bottom-small">
          <!--  <span class="heading-primary--main">Eder ramírez Hernández</span> -->
          <span class="heading-primary--main">Port Community</span>
          <!-- <span class="heading-primary--sub">Full-stack developer</span> -->
          <span class="heading-primary--sub"
            >Administracion Portuaria de Lázaro Cárdenas</span
          >
        </h1>
        <button class="button" href="#">Hire me</button>
      </div>

      <!-- <a href="#" class="btn btn--white btn--animated">Hire me</a> -->
    </div>
    <NavContent />
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import NavContent from "@/components/NavContent";
export default {
  components: {
    NavHeader,
    NavContent
  }
};
</script>

<style scoped></style>
