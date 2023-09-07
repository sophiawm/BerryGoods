const API_PRODUCTS = "http://localhost:3000/products/" 
const API_CATEGORIES = "http://localhost:3000/categories/" 

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
    let response = await (API_PRODUCTS + id, { method: "PATCH", body: JSON.stringify(updateProduct)});
    let data = await response.json(); 
    return data
  },

  async getCategory(id) {
    let data = await(await fetch(API_CATEGORIES + id)).json()
    return data
  }
  
}



export default productsService;