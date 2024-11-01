<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';

import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';

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




const productStore = useProdutoStore();

async function getProdutos() {
  
    await productStore.getProdutos();
  
}

onMounted(async () => {
  await getProdutos();
});

</script>


<template>
  
   <div class="product-list">
    <!-- <router-link :to="{ name: 'ProductAdd' }">
      <button class="icon ">
        <i class="mdi mdi-plus" />
      </button>
    </router-link> -->
   
    <div v-if="productStore.produtos.length === 0">
      <p>Produtos não encontrados!!!</p>
    </div>
    <swiper
      :breakpoints="{ 200:{ slidesPerView:5 }, 900:{ slidesPerView:3, } }"
      :modules="modules"
      :slides-per-view="5"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
  
    <div
      v-for="product in productStore.produtos"
      :key="product.id"
      class="product-card">
      <swiper-slide>
      <div class="product-img-wrapper">
        <img :src="product.backgroundChar?.url" alt="product.name" />
        <i class="mdi mdi-heart-outline" />
      </div>
    
      <div class="product-title-price">
        <p>{{ product.nome }}</p>
        <p>{{ formatPrice(product.preco * 1) }}</p>
      </div>
    </swiper-slide>
    </div>
  </swiper>
  </div>

      
    
    
  
  

  
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



