<template>
  <section class="projects">
    <aside class="projects__filters">
      <h3 class="heading-secondary">
        Filters
      </h3>

      <div>
        <h2 class="heading-tertiary">General</h2>
        <div class="checkbox-box">
          <label class="checkbox-container"
            >Profesional projects
            <input type="checkbox" value="profesional" v-model="filters" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container"
            >Learning projects
            <input type="checkbox" value="learning" v-model="filters" />
            <span class="checkmark"></span>
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
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      filters: [
        "vue.js",
        "react.js",
        "profesional",
        "learning",
        "laravel",
        "node.js",
        "firebase",
        "android",
        "java",
        "kotlin",
        "react-native",
        "flutter",
        "swift"
      ]
    };
  },
  beforeMount() {
    let query = firebase.db.collection("projects").orderBy("date", "desc");

    query.onSnapshot(snapShot => {
      this.projects = [];
      snapShot.forEach(project => {
        this.projects.push({
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
    });
  },
  mounted() {
    const grid = document.querySelector(".projects__cards");
    wrapGrid(grid);
  },
  methods: {
    generalfilter(projects, text) {
      if (!this.filters.includes(text)) {
        return projects.filter(project => !project.languages.includes(text));
      } else {
        return projects;
      }
    }
  },
  computed: {
    filteredProjects() {
      let projectsWithoutGeneral = this.projects;
      projectsWithoutGeneral = this.generalfilter(
        projectsWithoutGeneral,
        "learning"
      );
      projectsWithoutGeneral = this.generalfilter(
        projectsWithoutGeneral,
        "profesional"
      );

      let filtersWithoutGeneral = this.filters
        .filter(filter => filter !== "learning")
        .filter(filter => filter !== "profesional");

      return projectsWithoutGeneral.filter(project => {
        return project.languages.some(lang =>
          filtersWithoutGeneral.includes(lang)
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
