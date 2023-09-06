


const API_CATEGORIES = "http://localhost:3000/categories/" 

let  GetCategories = async (id) => {
  let data = await(await fetch(`${API_CATEGORIES}${id}`)).json();
  return data
}

export default GetCategories
  
