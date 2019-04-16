<template>
  <nav class="content-navigation">
    <ul class="nav-content">
      <li class="nav-content__item">
        <router-link class="nav-content__link" :to="{ name: 'projects' }">
          <span>Projects</span>
        </router-link>
      </li>
      <li class="nav-content__item">
        <router-link class="nav-content__link" :to="{ name: 'about-me' }">
          <span>About me</span>
        </router-link>
      </li>
      <!-- <li class="nav-content__item">
        <router-link class="nav-content__link" to="#">
          <span>Courses</span>
        </router-link>
      </li>
      <li class="nav-content__item">
        <router-link class="nav-content__link" to="#">
          <span>Certifications</span>
        </router-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
