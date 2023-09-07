import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import Error404 from "../pages/error404/Error404";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
        errorElement:<Error404/>
    },
    {
        path:'/products',
        element:<Products/>
    }
])

const Router = () => <RouterProvider router={router}/>

export default Router