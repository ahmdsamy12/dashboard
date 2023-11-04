import { Outlet, useParams } from "react-router-dom";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { product } from "../products/Products";
import { productsApp } from "../../api/Posts";
import { useAppSelector } from "../../rtk/Store";

const NavbarApp = () => {
  const carts = useAppSelector<product[]>((state) => state.products);

  // const [product, setProduct] = useState<product[]>([]);
  // let { productID } = useParams();

  // useEffect(() => {
  //   productsApp
  //     .get(`https://fakestoreapi.com/products/${productID}`)
  //     .then((res) => setProduct(res.data));
  // }, []);

  return (
    <div className="nav-bar p-4">
      <div className="container sticky top-0 p-4 bg-white">
        <div className="navbar-content flex justify-between">
          <div className="box-1">dashboard</div>
          <div className=" box-2 ">
            <Link to="/carts">
              {carts.length}
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavbarApp;
