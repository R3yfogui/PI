<script>
 // import Swiper core and required modules
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<template>
    <div class="silvio">
    <swiper
      :breakpoints="{ 200:{ slidesPerView:5 }, 900:{ slidesPerView:5, } }"
      :modules="modules"
      :slides-per-view="5"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>slider 1</swiper-slide>
      <swiper-slide><img src="../assets/seele.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/seele.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/seele.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/seele.png" alt=""></swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      
    </swiper>
    </div>
  </template>

<style scoped>
.silvio{
    flex-wrap: wrap-reverse;
    width: 100%;
    height: 100%;
}
.swiper-slide img{
    border-radius: 30px;
    padding-bottom: 30px;
}
.swiper-slide{
    border-radius: 30px;
}
.default-slider .swiper-slide {
  display: flex;
  height: 300px !important;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;

}
.swiper-slide:nth-child(1n) {
  background-color: palevioletred;
  
}
.swiper-slide:nth-child(2n) {
  background-color: skyblue;
}
.swiper-slide:nth-child(3n) {
  background-color: peru;
}
.swiper-slide:nth-child(4n) {
  background-color: cadetblue;
}
.swiper-slide:nth-child(5n) {
  background-color: plum;
}
.swiper-slide:nth-child(6n) {
  background-color: goldenrod;
}
.swiper-slide:nth-child(7n) {
  background-color: palegreen;
}
</style>