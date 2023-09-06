


const API_PRODUCTS = "http://localhost:3000/products/" 

let  GetProducts = async () => {
  let data = await(await fetch(`${API_PRODUCTS}`)).json();
  return data
}

export default GetProducts
  
