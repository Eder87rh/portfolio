<template>
  <div class="project-details">
    <div class="project-details__gallery">
      <!-- <Slider :images="this.project.images" /> -->
    </div>
    <div class="project-details__data">
      <h2 class="heading-secondary heading-secondary--white">
        {{ this.project.name }}
      </h2>
      <p>
        {{ this.project.description_long }}
      </p>
      <nav class="project-options">
        <li class="project-options__item" v-if="project.live">
          <a target="_blank" :href="project.live" class="project-options__link">
            <svg class="project-options__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-new-tab" />
            </svg>
            <span>See it in action</span>
          </a>
        </li>
        <li class="project-options__item" v-if="project.github">
          <a
            target="_blank"
            :href="project.github"
            class="project-options__link"
          >
            <svg class="project-options__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-github" />
            </svg>
            <span>Github repository</span>
          </a>
        </li>
      </nav>
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
