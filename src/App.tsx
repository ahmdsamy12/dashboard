import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AllPosts from "./components/all posts/AllPosts";
import AllStadiums from "./components/all stadiums/AllStadiums";
import Products from "./components/products/Products";
import ProductsDetails from "./components/productsDetails/ProductsDetails";
import Carts from "./carts/Carts";
import Register from "./components/register/Register";
import { ToastContainer } from "react-toastify";
import Login from "./components/login/Login";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productID" element={<ProductsDetails />} />
      <Route path="/stads" element={<AllStadiums />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <ToastContainer></ToastContainer>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
