import { createBrowserRouter } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay";
import productsService from "../service/productService";
import App from "../App";

const fetchProducts = async () => {
  let product = await productsService.getProduct(1);
  return product

}

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    loader: fetchProducts
  }
])




export default router;