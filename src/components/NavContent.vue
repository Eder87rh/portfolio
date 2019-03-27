<template>
  <nav class="content-navigation">
    <ul class="nav-content">
      <li class="nav-content__item">
        <router-link class="nav-content__link" :to="{ name: 'projects' }">
          <!--  <svg class="nav-content__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-home" />
            </svg> -->
          <span>Projects</span>
        </router-link>
      </li>
      <li class="nav-content__item">
        <router-link class="nav-content__link" to="#">
          <!-- <svg class="nav-content__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-github" />
            </svg> -->
          <span>About me</span>
        </router-link>
      </li>
      <li class="nav-content__item">
        <router-link class="nav-content__link" to="#">
          <!-- <svg class="nav-header__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-linkedin" />
            </svg> -->
          <span>Courses</span>
        </router-link>
      </li>
      <li class="nav-content__item">
        <router-link class="nav-content__link" to="#">
          <!-- <svg class="nav-header__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-linkedin" />
            </svg> -->
          <span>Certifications</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
