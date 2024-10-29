<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>


<template>
    <div class="silvio">
        <Swiper :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <!-- Adicione mais slides se necessário -->
  </Swiper>
    </div>
  

  
</template>

<style scoped>
.silvio{
  display: flex;
  z-index: 1000;
    flex-wrap: wrap-reverse;
    width: 100%;
    height: 100%;
    margin-left: 110px;
}
.swiper{
  position: relative;
  z-index: 1000;
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
  
  
}
.swiper-slide:nth-child(2n) {
  
}
.swiper-slide:nth-child(3n) {
  
}
.swiper-slide:nth-child(4n) {
  
}
.swiper-slide:nth-child(5n) {
  
}
.swiper-slide:nth-child(6n) {
  
}
.swiper-slide:nth-child(7n) {
  
}
</style>



