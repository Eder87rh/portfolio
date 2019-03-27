<template>
  <div>
    <div class="card">
      <div class="card__img">
        <img
          :src="`img/${project.name}/1.png`"
          alt=""
          class="card__project-banner"
        />
        <div class="card__technologies">
          <div
            class="card__technology-item"
            v-for="(language, index) in project.languages"
            :key="index"
          >
            {{ language }}
          </div>
          <!-- <div class="card__technology-item">Laravel</div>
          <div class="card__technology-item">CSS Grid</div> -->
        </div>
      </div>
      <div class="card__details">
        <div class="card__icon-container">
          <svg class="card__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-github" />
          </svg>
          <div>Github</div>
        </div>
        <div class="card__icon-container">
          <svg class="card__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-new-tab" />
          </svg>
          <div>Live</div>
        </div>
        <div class="card__icon-container">
          <svg class="card__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-arrow-right2" />
          </svg>
          <div>Details</div>
        </div>
      </div>
    </div>
    <div class="card__title">{{ project.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
