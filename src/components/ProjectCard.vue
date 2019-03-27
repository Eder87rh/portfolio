<template>
  <div>
    <div class="card">
      <figure class="card__img">
        <img
          class="card__project-banner"
          :src="`img/${project.images[1]}`"
          alt=""
        />
        <div class="card__technologies">
          <div
            class="card__technology-item"
            v-for="(language, index) in project.languages"
            :key="index"
          >
            {{ language }}
          </div>
        </div>
      </figure>
      <div class="card__details">
        <div
          class="card__icon-container"
          v-if="!!project.github"
          @click="openInNewTab(project.github)"
        >
          <svg class="card__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-github" />
          </svg>
          <div>Github</div>
        </div>
        <div
          class="card__icon-container"
          v-if="!!project.live"
          @click="openInNewTab(project.live)"
        >
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
  },
  methods: {
    openInNewTab(url) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
};
</script>

<style scoped></style>
