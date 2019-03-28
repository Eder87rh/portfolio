<template>
  <section class="projects">
    <aside class="projects__filters">
      <h3 class="heading-secondary">
        Filters
      </h3>

      <h2 class="heading-tertiary">General</h2>
      <div class="checkbox-box">
        <label class="radio-container"
          >All
          <input
            type="radio"
            checked="checked"
            name="show-projects"
            value="1"
          />
          <span class="radio-checkmark"></span>
        </label>
        <label class="radio-container"
          >Filter learning projects
          <input type="radio" name="show-projects" value="0" />
          <span class="radio-checkmark"></span>
        </label>
      </div>

      <h2 class="heading-tertiary">Front-end</h2>
      <div class="checkbox-box">
        <label class="checkbox-container"
          >Vue.js
          <input type="checkbox" checked="checked" value="vue" />
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container"
          >React.js
          <input type="checkbox" checked="checked" value="react" />
          <span class="checkmark"></span>
        </label>
      </div>

      <h2 class="heading-tertiary">Back-end</h2>
      <div class="checkbox-box">
        <label class="checkbox-container"
          >Laravel - PHP
          <input type="checkbox" checked="checked" value="vue" />
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container"
          >Express - Node.js
          <input type="checkbox" checked="checked" value="react" />
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container"
          >Firebase
          <input type="checkbox" checked="checked" value="react" />
          <span class="checkmark"></span>
        </label>
      </div>

      <h2 class="heading-tertiary">Mobile</h2>
      <div class="checkbox-box">
        <label class="checkbox-container"
          >Android - Java
          <input type="checkbox" checked="checked" value="vue" />
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container"
          >Android - Kotlin
          <input type="checkbox" checked="checked" value="react" />
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container"
          >React Native
          <input type="checkbox" checked="checked" value="react" />
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container"
          >Flutter
          <input type="checkbox" checked="checked" value="react" />
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container"
          >Swift
          <input type="checkbox" checked="checked" value="react" />
          <span class="checkmark"></span>
        </label>
      </div>
    </aside>
    <div class="projects__cards">
      <!-- <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard /> -->
      <ProjectCard
        v-for="project in projects"
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
      projects: []
    };
  },
  beforeMount() {
    console.log(firebase.db);
    firebase.db
      .collection("projects")
      .orderBy("date", "desc")
      .onSnapshot(snapShot => {
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
  }
};
</script>

<style lang="scss" scoped></style>
