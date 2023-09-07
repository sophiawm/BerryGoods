import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import Error404 from "../pages/error404/Error404";
import ProductDisplay from "../components/ProductDisplay";
import productsService from "../service/productService";
import App from "../App";

const fetchProducts = async () => {
    let product = await productsService.getProduct(1);
    return product
}

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
        errorElement:<Error404/>
    },
    {
        path:'/products',
        element:<Products/>
    },
    {
        path: "/homepage",
        element: <App />,
        loader: fetchProducts
    }
])


export default router;