<script setup>
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';

import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';


const productStore = useProdutoStore();

async function getProdutos() {
  
    await productStore.getProdutos();
  
}

// const products = computed(() => { return productStore.produtos })

// watch(
//   () => props.category_id,
//   async () => {
//     await getProducts();
//   },
// );

onMounted(async () => {
  await getProdutos();
});
</script>

<template>
  <!-- {{ productStore.produtos }} a -->
  
  <div class="product-list">
    <!-- <router-link :to="{ name: 'ProductAdd' }">
      <button class="icon ">
        <i class="mdi mdi-plus" />
      </button>
    </router-link> -->
    <div v-if="productStore.produtos.length === 0">
      <p>Produtos não encontrados!!!</p>
    </div>
    <div
      v-for="product in productStore.produtos"
      :key="product.id"
      class="product-card"
    >
      <div class="product-img-wrapper">
        <img :src="product.backgroundChar?.url" alt="product.name" />
        <i class="mdi mdi-heart-outline" />
      </div>
      <div class="product-title-price">
        <p>{{ product.nome }}</p>
        <p>{{ formatPrice(product.preco * 1) }}</p>
      </div>
      <div class="product-description-stars">
        <!-- <p>{{ formatDescription(product.descricao) }}</p> -->
        <div class="stars">
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.icon {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 12rem;
  right: 20px;
}

.icon:hover {
  background-color: #bac9e8;
  color: #0a2668;
}

.icon i {
  font-size: 2rem;
}

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
  gap: 0.5rem;
  padding-top: 20px;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.product-img-wrapper img {
  width: 153px;
  height: 170px;
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
</style>