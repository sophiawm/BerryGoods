import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "../pages/login/Login";
import ProductDisplayPage from "../pages/products/ProductDisplayPage";
import Error404 from "../pages/error404/Error404";
import productsService from "../service/productService";
import Dashboard from "../pages/products/Dashboard";
import ProductFormPage from "../pages/products/ProductFormPage";

const fetchProducts = async () => {
    let product = await productsService.getProducts();
    return product
}

const fetchProduct = async ({params}) => {
  const id = ({params}).params.id
  let product = await productsService.getProduct(id);
  return product
}


const fetchCategory = async ({params}) => {
  const id = ({params}).params.id
  let product = await productsService.getCategory(id);
  return product
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>,
    errorElement:<Error404/>
  }, 

  {
    path: "/homepage",
    element: <Dashboard />,
    loader: fetchProducts
  },  

  {
    path:'/homepage/:id',
    element:<Dashboard />,
    loader: fetchCategory
  },  

  {
      path:'/products/:id',
      element:<ProductDisplayPage/>,
      loader: fetchProduct
  }, 

  {
    path:'/products/:id',
    element:<ProductDisplayPage/>,
    loader: fetchCategory
  },  

  {
    path:'/edit-products/:id',
    element:<ProductFormPage/>,
    loader: fetchProduct
  }

])


export default router;