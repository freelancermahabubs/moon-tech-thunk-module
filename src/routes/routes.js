import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/ProductList";
import About from "../pages/Main/About";
import Cart from "../pages/Main/Cart";
import Home from "../pages/Main/Home";
import TopRated from "../pages/Main/TopRated";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AdminCustomersList from "../pages/Dashboard/AdminCustomersList";
import AddCustomer from "../pages/Dashboard/AddCustomer";
import AdminOrderList from "../pages/Dashboard/AdminOrderList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "product-list",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "admin-customer",
        element: <AdminCustomersList />,
      },
      {
        path: "add-customerr",
        element: <AddCustomer />,
      },
      {
        path: "adminorderlist",
        element: <AdminOrderList />,
      },
    ],
  },
]);

export default routes;
