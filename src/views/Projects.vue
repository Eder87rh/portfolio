<template>
  <section class="projects">
    <aside class="projects__filters">
      <h3 class="heading-secondary">
        Filters
      </h3>

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
          languages: project.data().languages,
          images: project.data().images,
          date: project.data().date
        });
      });
    });
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => {
        return project.languages.some(lang => this.filters.includes(lang));
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
