<template>
  <nav class="header__navigation">
    <ul class="nav-header">
      <li class="nav-header__item">
        <router-link class="nav-header__link" :to="{ name: 'home' }">
          <svg class="nav-header__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-home" />
          </svg>
          <span>Home</span>
        </router-link>
      </li>
      <li class="nav-header__item">
        <router-link class="nav-header__link" to="#">
          <svg class="nav-header__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-github" />
          </svg>
          <span>Github</span>
        </router-link>
      </li>
      <li class="nav-header__item">
        <router-link class="nav-header__link" to="#">
          <svg class="nav-header__icon">
            <use xlink:href="../assets/icons/sprite.svg#icon-linkedin" />
          </svg>
          <span>Linkedin</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
