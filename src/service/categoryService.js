import { API_URL } from "./env"

const categoryService = {
  
  async getCategory(id) {
    let dataCategory = await(await fetch(`${API_URL}/categories/${id}`)).json()
    return dataCategory
  }


  
}

export default categoryService