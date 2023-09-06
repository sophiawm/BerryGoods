


const API_PRODUCTS = "http://localhost:3000/products/" 

let  GetProduct = async (id) => {
  let data = await(await fetch(`${API_PRODUCTS}${id}`)).json();
  return data
}

export default GetProduct
  
