import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import ProductsView from "./components/ProductsView";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Users from "./components/Users";


function App() {
  const [getcategory, setgetCategory] = useState("electronics");
  const [getProductView, setgetProductView] = useState([]);

  // const navigate = useNavigate();

  function getCategory(category) {
    setgetCategory(category);
  }

  function getProduct(productsDetiles) {
    setgetProductView(productsDetiles);
    navigate("/ProductsView", { state: productsDetails });
  }

  return (
    <>
      <div>
            
          </div>
      <HashRouter>
      <Navbar></Navbar>
        <Routes>
        
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products
            getCategory={getCategory}
            category={getcategory}
            getProduct={getProduct}
          ></Products>}></Route>
          <Route path="/ProductsView" element={<ProductsView></ProductsView> }></Route>
          <Route path="/Users" element={<Users></Users>}></Route>

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
