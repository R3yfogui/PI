<script setup>
import Neeko from '@/1hlck/Neeko.vue';

</script>


<template>
 
  <Neeko></Neeko>
  

  
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

.product-card {
  width: 225px;
  font-family: 'Belleza', sans-serif;
}

.product-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.product-img-wrapper img {
  object-fit: cover;
}

.product-title-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.product-title-price p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

.product-description-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.product-description-stars p {
  font-size: 12px;
  color: #535050;
}
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

</style>



