<template>
  <div>
    <router-link
      :to="{
        name: 'project_details',
        params: { id: project.id }
      }"
      tag="span"
    >
      <div class="card">
        <div class="card__title">{{ project.name }}</div>
        <div class="card__description">
          {{ project.description }}
        </div>
        <figure class="card__img-shape">
          <img class="card__img" :src="project.images[0]" alt="" />
          <!--  <figcaption class="card__description">
            {{ project.description }}
          </figcaption> -->
          <div class="card__ref-container">
            <div class="card__technologies">
              <div class="card__date">
                <svg class="card__icon">
                  <use xlink:href="../assets/icons/sprite.svg#icon-calendar" />
                </svg>
                {{ getDate(project.date.seconds) }}
              </div>
              <div
                class="card__technology-item"
                v-for="(language, index) in project.languages"
                :key="index"
              >
                {{ language }}
              </div>
            </div>
          </div>
        </figure>
        <div class="card__details">
          <div
            class="card__icon-container"
            v-if="!!project.github"
            @click.prevent="openInNewTab(project.github)"
          >
            <svg class="card__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-github" />
            </svg>
            <div>Github</div>
          </div>
          <div
            class="card__icon-container"
            v-if="!!project.live"
            @click.prevent="openInNewTab(project.live)"
          >
            <svg class="card__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-new-tab" />
            </svg>
            <div>Live</div>
          </div>
          <!-- <div
            class="card__icon-container"
            v-if="!!project.certification"
            @click.prevent="openInNewTab(project.certification)"
          >
            <svg class="card__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-file-text" />
            </svg>
            <div>Cert</div>
          </div> -->
          <div class="card__icon-container">
            <svg class="card__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-arrow-right2" />
            </svg>
            <div class="card__text-button">Details</div>
          </div>
        </div>
      </div>
      <!-- <div class="card__title">{{ project.name }}</div> -->
    </router-link>
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
    },
    getDate(UNIX_Timestamp) {
      let options = {
        //weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const date = new Date(UNIX_Timestamp * 1000).toLocaleDateString(
        "en-US",
        options
      );
      return date;
    }
  }
};
</script>

<style scoped></style>
