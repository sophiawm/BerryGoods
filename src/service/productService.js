const API_PRODUCTS = "http://localhost:3000/products/" 

const productsService = {
  
  async getProducts() {
    let data = await(await fetch(API_PRODUCTS)).json();
    return data
  },

  async getProduct(id) {
    let data = await(await fetch(API_PRODUCTS + id)).json();
    return data
  },

  async editProduct(id, updateProduct) {
    let response = (API_PRODUCTS + id, { method: "PATCH", body: JSON.stringify(updateProduct)});
    let data = await response.json(); 
    return data
  },

  async deleteProduct(id) {
    await fetch(API_PRODUCTS + id, {method: "DELETE"});
  },


}



export default productsService;