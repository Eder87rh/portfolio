<template>
  <div class="project-details">
    <div class="project-details__gallery">
      <div class="gallery">
        <div
          class="gallery__item"
          v-for="(image, index) in project.images"
          :key="index"
        >
          <figure class="gallery__img-shape">
            <img class="gallery__img" :src="project.images[index]" alt="" />
          </figure>
        </div>

        <!-- <div class="gallery__item">Item 2</div>
        <div class="gallery__item">Item 3</div>
        <div class="gallery__item">Item 4</div>
        <div class="gallery__item">Item 5</div>
        <div class="gallery__item">Item 6</div>
        <div class="gallery__item">Item 7</div>
        <div class="gallery__item">Item 8</div> -->
        <!-- <div class="gallery__item">Item 9</div>
        <div class="gallery__item">Item 10</div>
        <div class="gallery__item">Item 11</div>
        <div class="gallery__item">Item 12</div>
        <div class="gallery__item">Item 13</div>
        <div class="gallery__item">Item 14</div>
        <div class="gallery__item">Item 15</div>
        <div class="gallery__item">Item 16</div>
        <div class="gallery__item">Item 17</div>
        <div class="gallery__item">Item 18</div>
        <div class="gallery__item">Item 19</div>
        <div class="gallery__item">Item 20</div> -->
      </div>
    </div>
    <div class="project-details__data"></div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
