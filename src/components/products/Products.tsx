import React, { useEffect, useState } from "react";
import { productsApp } from "../../api/Posts";
import { Link } from "react-router-dom";
import { addToCart } from "../../rtk/slices/ProductsSlice";
import { useAppDispatch } from "../../rtk/Store";

export interface product {
  id: number | string;
  description: string;
  image: string;
  title: string;
  price: number;
  quantity: 1;
}

const Products = () => {
  const [products, setProducts] = useState<product[]>([]);
  const dispatch = useAppDispatch();

  const deleteProducts = (id: number | string) => {
    productsApp.delete(`${id}`);
    setProducts(
      products.filter((stad) => {
        return stad.id !== id;
      })
    );
  };

  useEffect(() => {
    productsApp.get("").then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="products grid grid-cols-main gap-5">
      {products.map((product) => (
        <div
          className="product-card bg-gray-300 p-2 rounded-lg"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.title}
            className=" h-1/2 w-full"
          />
          <h3 className=" font-black text-center my-4">{product.title}</h3>
          <p className=" text-black text-center mb-4">
            {product.description.slice(0, 50)}...
          </p>
          <Link
            to={`/products/${product.id}`}
            className="py-2 px-8 bg-green-500 text-white my-4 rounded-xl"
          >
            View
          </Link>
          <button
            onClick={() => deleteProducts(product.id)}
            className="ml-2 py-2 px-8 bg-red-500 text-white rounded-xl"
          >
            delete
          </button>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="py-2 px-4 mt-4 text-sm ml-2 bg-green-500 text-white rounded-lg"
          >
            Add To Carts
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
