import axios from 'axios';

export default class CompraService {
  async getCompras() {
    const response = await axios.get('/compras/');
    return response.data.results;
  }

//   async getProdutoByCategory(category_id) {
//     const response = await axios.get(`/produtos/?category__id=${category_id}`);
//     return response.data.results;
//   }

  async createCompra(compra) {
    const response = await axios.post('/compras/', compra);
    return response.data;
  }
}