import Home from "./components/UI/Home";
import Products from "./components/UI/Products";
import React, { useState, useEffect } from "react";
import Footer from "./components/UI/Footer";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products: ", error));
  }, []);
  console.log(products)
  return (
    <div className="container">
      <Home />
      <Products products={products} />
      <Footer/>
    </div>
  );
}

export default App;
