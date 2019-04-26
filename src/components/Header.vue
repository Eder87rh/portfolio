<template>
  <div class="header">
    <NavHeader />
    <div class="banner-texbox">
      <figure class="banner-texbox__avatar">
        <img src="img/me.jpg" alt="Eder Ramírez" class="banner-texbox__img" />
      </figure>
      <div class="banner-texbox__title">
        <h1 class="heading-primary margin-bottom-small">
          <span class="heading-primary--main">Eder Ramírez</span>
          <!-- <span class="heading-primary--main">Port Community</span> -->
          <span class="heading-primary--sub">Full-stack developer</span>
          <!-- <span class="heading-primary--sub" -->
          <!-- >Administracion Portuaria de Lázaro Cárdenas</span -->
        </h1>
        <button
          class="button"
          onClick="location.href = 'mailto:eder.ramirez87@gmail.com'"
        >
          Hire me
        </button>
      </div>
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
