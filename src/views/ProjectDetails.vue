<template>
  <!-- <transition name="slide"> -->
  <div class="project-details">
    <div class="project-details__gallery">
      <Slider :images="this.project.images" />
    </div>
    <div class="project-details__data">
      <h2 class="heading-secondary heading-secondary--white">
        {{ this.project.name }}
      </h2>
      <p
        v-for="(line, index) in project.description_long"
        :key="index"
        class="project-details__description"
      >
        {{ line }}
      </p>

      <div class="technologies">
        <div
          class="technologies__item"
          v-for="(language, index) in project.languages"
          :key="index"
        >
          {{ language }}
        </div>
      </div>

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
        <li class="project-options__item" v-if="project.certification">
          <a
            target="_blank"
            :href="project.certification"
            class="project-options__link"
          >
            <svg class="project-options__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-file-text" />
            </svg>
            <span>See certificate</span>
          </a>
        </li>
      </nav>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
import Slider from "@/components/Slider.vue";
import firebase from "@/firebaseInit";
import NProgress from "nprogress";

async function getProjectDetails(to, next) {
  try {
    let query = firebase.db.collection("projects").doc(to.params.id);

    NProgress.start();

    query.get().then(doc => {
      if (doc.exists) {
        let project = {
          id: doc.id,
          name: doc.data().name,
          live: doc.data().live,
          github: doc.data().github,
          description: doc.data().description,
          description_long: doc.data().description_long,
          languages: doc.data().languages,
          images: doc.data().images,
          date: doc.data().date,
          certification: doc.data().certification
        };
        to.params.project = project;

        NProgress.done();
        next();
      } else {
        NProgress.done();
        console.log("No such document.");
        next({ name: "404", params: { resource: "project" } });
      }
    });
  } catch (error) {
    NProgress.done();
    console.log("TCL: beforeEnter -> error", error);
    next({ name: "network-issue" });
  }
}

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  async beforeRouteEnter(to, from, next) {
    getProjectDetails(to, next);
  },
  components: {
    Slider
  }
};
</script>

<style scoped></style>
