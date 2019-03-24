<template>
  <div class="header">
    <nav>
      <ul class="topnav">
        <li class="topnav__item">
          <router-link class="topnav__link" :to="{ name: 'home' }">
            <svg class="topnav__icon">
              <use xlink:href="../assets/icons/sprite.svg#icon-home" />
            </svg>
            <span>Home</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
