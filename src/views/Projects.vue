<template>
  <section class="projects">
    <aside class="projects__filters">
      <h3 class="heading-secondary">
        Filters
      </h3>

      <div>
        <div class="checkbox-box">
          <label class="checkbox-container">
            {{ checkAllLabel }}
            <input type="checkbox" value="vue.js" v-model="checkAll" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div>
        <h2 class="heading-tertiary">General</h2>
        <div class="radio-box">
          <label class="radio-container"
            >Profesional projects
            <input type="radio" value="profesional" v-model="generalFilter" />
            <span class="radio-checkmark"></span>
          </label>
          <label class="radio-container"
            >Learning projects
            <input type="radio" value="learning" v-model="generalFilter" />
            <span class="radio-checkmark"></span>
          </label>
        </div>
      </div>

      <div>
        <h2 class="heading-tertiary">Front-end</h2>
        <div class="checkbox-box">
          <label class="checkbox-container"
            >Vue.js
            <input type="checkbox" value="vue.js" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >React.js
            <input type="checkbox" value="react.js" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >SASS
            <input type="checkbox" value="sass" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Vuetify
            <input type="checkbox" value="vuetify" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Javascript
            <input type="checkbox" value="javascript" v-model="filters" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div>
        <h2 class="heading-tertiary">Back-end</h2>
        <div class="checkbox-box">
          <label class="checkbox-container"
            >Laravel
            <input type="checkbox" value="laravel" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Node.js
            <input type="checkbox" value="node.js" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Firebase
            <input type="checkbox" value="firebase" v-model="filters" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div>
        <h2 class="heading-tertiary">Mobile</h2>
        <div class="checkbox-box">
          <label class="checkbox-container"
            >Android
            <input type="checkbox" value="android" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Java
            <input type="checkbox" value="java" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >React Native
            <input type="checkbox" value="react-native" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Flutter
            <input type="checkbox" value="flutter" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Swift
            <input type="checkbox" value="swift" v-model="filters" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </aside>
    <div class="projects__cards">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import { wrapGrid } from "animate-css-grid";
import firebase from "@/firebaseInit";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

async function getProjects(to, next) {
  try {
    let query = firebase.db.collection("projects").orderBy("date", "desc");

    NProgress.start();

    query.onSnapshot(snapShot => {
      let projects = [];
      snapShot.forEach(project => {
        projects.push({
          id: project.id,
          name: project.data().name,
          live: project.data().live,
          github: project.data().github,
          description: project.data().description,
          description_long: project.data().description_long,
          languages: project.data().languages,
          images: project.data().images,
          date: project.data().date,
          certification: project.data().certification
        });
      });
      to.params.projects = projects;
      NProgress.done();
      next();
    });
  } catch (error) {
    NProgress.done();
    console.log("TCL: beforeEnter -> error", error);
    next({ name: "network-issue" });
  }
}

export default {
  props: {
    projects: {
      required: true,
      type: Array
    }
  },
  async beforeRouteEnter(to, from, next) {
    getProjects(to, next);
  },
  components: {
    ProjectCard: () =>
      import(
        /* webpackChunkName: "ProjectCard" */ "@/components/ProjectCard.vue"
      )
  },
  data() {
    return {
      checkAll: true,
      generalFilter: "profesional",
      filters: [
        "vue.js",
        "react.js",
        "laravel",
        "node.js",
        "firebase",
        "android",
        "java",
        "kotlin",
        "react-native",
        "flutter",
        "swift",
        "sass",
        "vuetify",
        "javascript"
      ]
    };
  },
  mounted() {
    const grid = document.querySelector(".projects__cards");
    wrapGrid(grid);
  },
  computed: {
    filteredProjects() {
      // General filter
      let projectsGeneral = this.projects.filter(project =>
        project.languages.includes(this.generalFilter)
      );

      return projectsGeneral.filter(project => {
        return project.languages.some(lang => this.filters.includes(lang));
      });
    },
    checkAllLabel() {
      return this.checkAll ? "Uncheck All" : "Check all";
    }
  },
  watch: {
    checkAll() {
      if (this.checkAll) {
        this.filters = [
          "vue.js",
          "react.js",
          "laravel",
          "node.js",
          "firebase",
          "android",
          "java",
          "kotlin",
          "react-native",
          "flutter",
          "swift",
          "sass",
          "vuetify",
          "javascript"
        ];
      } else {
        this.filters = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
