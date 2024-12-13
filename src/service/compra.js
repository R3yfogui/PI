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
    const response = await axios.create('/compras/', compra);
    return response.data;
  }
}
// import axios from "axios";
// export default class CategoriasApi {
//   async buscarTodasAsCategorias() {
//     const { data } = await axios.get("/categorias/");
//     return data.results;
//   }
//   async adicionarCategoria(categoria) {
//     const { data } = await axios.post("/categorias/", categoria);
//     return data.results;
//   }
//   async atualizarCategoria(categoria) {
//     const { data } = await axios.put(`/categorias/${categoria.id}/`, categoria);
//     return data.results;
//   }
//   async excluirCategoria(id) {
//     const { data } = await axios.delete(`/categorias/${id}/`);
//     return data.results;
//   }
// }
