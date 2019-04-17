<template>
  <nav class="header__navigation">
    <ul class="nav-header">
      <li class="nav-header__item">
        <router-link class="nav-header__link" :to="{ name: 'projects' }">
          <svg class="nav-header__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-home" />
          </svg>
          <span>Home</span>
        </router-link>
      </li>
      <li class="nav-header__item">
        <a
          class="nav-header__link"
          target="_blank"
          href="https://github.com/Eder87rh"
        >
          <svg class="nav-header__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-github" />
          </svg>
          <span>Github</span>
        </a>
      </li>
      <li class="nav-header__item">
        <a
          class="nav-header__link"
          target="_blank"
          href="https://www.linkedin.com/in/ederdev/"
        >
          <svg class="nav-header__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-linkedin" />
          </svg>
          <span>Linkedin</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
