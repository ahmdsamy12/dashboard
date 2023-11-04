import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsApp } from "../../api/Posts";
import { product } from "../products/Products";
import { useAppDispatch } from "../../rtk/Store";
import { addToCart } from "../../rtk/slices/ProductsSlice";

const ProductsDetails = () => {
  const [product, setProduct] = useState<product>();
  const dispatch = useAppDispatch();
  let { productID } = useParams();

  useEffect(() => {
    productsApp
      .get(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="product">
      {product && (
        <div
          className="product-card w-1/3 text-center my-5 mx-auto"
          key={product.id}
        >
          <img src={product.image} alt="" />
          <h3 className="font-black text-center">{product.title}</h3>
          <p>{product.description}</p>
          <p className="my-4 font-black">price: {product.price} $</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="py-2 px-8 bg-green-500 text-white rounded-lg"
          >
            Add To Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
