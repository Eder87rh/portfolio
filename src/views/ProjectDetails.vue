<template>
  <div class="project-details">
    <div class="project-details__gallery">
      <Slider :images="this.project.images" />
    </div>
    <div class="project-details__data">
      <h2 class="heading-secondary heading-secondary--white">
        {{ this.project.name }}
      </h2>
      <p>
        {{ this.project.description_long }}
      </p>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    Slider
  }
};
</script>

<style scoped></style>
