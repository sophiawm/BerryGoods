import { createBrowserRouter } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay";
import productsService from "../service/productService";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    loader: fetchProducts
  }
])

const fetchProducts = async () => {
  let product = await productsService.getProduct();
  return product

}

/* const devuelvealgo =  () =>  2; */


export default router;