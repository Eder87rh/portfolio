<template>
  <div style="height: 100%">
    <div style="height: 100%">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide
          class="slide-1"
          v-for="(image, index) in images"
          :key="index"
        >
          <img class="swiper-lazy" :src="image" alt="" />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>

        <div
          class="swiper-button-next swiper-button-black"
          slot="button-next"
        ></div>
        <div
          class="swiper-button-prev swiper-button-black"
          slot="button-prev"
        ></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        :options="swiperOptionThumbs"
        class="gallery-thumbs"
        ref="swiperThumbs"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img class="swiper-lazy" :src="image" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    images: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      swiperOptionTop: {
        lazy: true,
        slidesPerView: "auto",
        spaceBetween: 20, //looped slides should be the same
        loop: true,
        loopedSlides: this.images.length + 1,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        //centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2, //looped slides should be the same
        loop: true,
        loopedSlides: this.images.length + 1,
        slideToClickedSlide: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: $color-grey-dark-3;
  //padding: 5rem;
}

.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444 !important;
}
.gallery-top {
  height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
