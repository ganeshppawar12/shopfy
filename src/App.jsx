import { useState } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductsView from "./components/ProductsView";
import Users from "./components/Users";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated"); // Check if user is logged in
  return isAuthenticated ? element : <Navigate to="/login" />;
};
function App() {
  const [getcategory, setgetCategory] = useState("electronics");
  const [getProductView, setgetProductView] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("isAuthenticated"));

  const handleLogin = () => {
    sessionStorage.setItem("isAuthenticated", "true"); // User is now authenticated
    setIsLoggedIn(true);
  };
  

  function getCategory(category) {
    setgetCategory(category);
  }

  function getProduct(productsDetails) {
    setgetProductView(productsDetails);
  }

  return (
    <HashRouter>
      <MainLayout>
        <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/products" element={<PrivateRoute element={<Products getCategory={getCategory} category={getcategory} getProduct={getProduct} />} />} />
          <Route path="/ProductsView" element={<PrivateRoute element={<ProductsView />} />} />
          <Route path="/Users" element={<PrivateRoute element={<Users />} />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/Contact" element={<Contact/>} />

        </Routes>
      </MainLayout>
      <Footer></Footer>
    </HashRouter>
  );
}

// Component to handle layout with conditional Navbar
const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
};

export default App;
