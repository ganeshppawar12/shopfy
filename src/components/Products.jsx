import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const Products = ({getCategory,category,getProduct}) => {
  const [products, Setproducts] = useState([]);
  const navigate = useNavigate();


  function getProduct(productsDetails) {
    // setgetProductView(productsDetails);
    navigate("/ProductsView", { state: productsDetails }); // ✅ Pass data correctly
  }

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();

      Setproducts(data);
    //   console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [Setproducts,category]);
  return (
    <div className="flex gap-1" >
        <div className="" style={{flex:'0.2'}} >
        <SideBar getCategory={getCategory}></SideBar>

        </div>
      <div className="flex flex-1">
        <ul className=" flex flex-col gap-2 "  >
          {products?.map((item) => {
            return <li onClick={()=>getProduct(item)} >{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
