import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "../pages/login/Login";
import ProductDisplayPage from "../pages/products/ProductDisplayPage";
import Error404 from "../pages/error404/Error404";
import productsService from "../service/productService";
import Dashboard from "../pages/products/Dashboard";

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
        path: "/homepage",
        element: <Dashboard />,
        loader: fetchProducts
    },
    {
        path:'/products',
        element:<ProductDisplayPage/>,
        loader: fetchProducts
    }
])


export default router;