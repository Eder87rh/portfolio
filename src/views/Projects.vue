<template>
  <section class="projects">
    <aside class="projects__filters"></aside>
    <div class="projects__cards">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard
  }
};
</script>

<style lang="scss" scoped></style>
