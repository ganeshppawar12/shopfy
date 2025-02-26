import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const Products = ({ getCategory, category }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function getProduct(productsDetails) {
    navigate("/ProductsView", { state: productsDetails });
  }

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="flex shadow-lg rounded-lg overflow-hidden bg-white  ">
      {/* Sidebar */}
      <div className="w-1/4 bg-black text-white p-5">
        <SideBar getCategory={getCategory} />
      </div>

      {/* Products List */}
      <div className="w-3/4 p-5">
        <ul className="space-y-3">
          {products?.map((item, index) => (
            <li
              key={index}
              onClick={() => getProduct(item)}
              className="cursor-pointer text-gray-800 hover:text-blue-500"
            >
              • {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
