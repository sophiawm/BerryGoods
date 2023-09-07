


const API_CATEGORIES = "http://localhost:3000/products" 

let  GetCategories = async (id) => {
  let data = await(await fetch(`${API_CATEGORIES}${id}`)).json();
  return data
}

export default GetCategories
  
