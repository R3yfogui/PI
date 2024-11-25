import { ref } from 'vue';
import { defineStore } from 'pinia';

import CompraService from '@/service/compra';
const compraService = new CompraService();

export const useCompraStore = defineStore('compra', () => {
  const compras = ref([]);

  async function getCompras() {
    compras.value = await compraService.getCompras();
  }

//   async function getProductsByCategory(category_id) {
//     products.value = await productService.getProductByCategory(category_id);
//   }

  async function createCompra(compra) {
    await compraService.createCompra(compra);
    getCompras();
  }

  return { compras, createCompra, getCompras };
});