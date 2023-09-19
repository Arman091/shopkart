import "./Products.css";
import star from "../../assets/Star 2.png";
import arrowleft from "../../assets/arrowleft.png";
import arrowright from "../../assets/arrowright.png";
import React, { useState, useRef } from "react";

function Products({ products }) {
  const [scrollLeft, setScrollLeft] = useState(0);
  const prodListRef = useRef(null);

  const scrollProducts = (direction) => {
    const prodList = prodListRef.current;

    if (prodList) {
      const itemWidth = prodList.querySelector(".product-item").offsetWidth;
      const scrollDistance = direction === "left" ? -itemWidth : itemWidth;
      setScrollLeft((prevScrollLeft) => prevScrollLeft + scrollDistance);
      prodList.style.transform = `translateX(${scrollLeft}px)`;
    }
  };

  return (
    <div className="product-container">
      <div className="prod-cont-top">
        <div className="heading">
          <h2>New Products</h2>
          <hr />
          <img src={star} alt="Star" className="products-star" />
        </div>
        <div className="arrows">
          <img
            src={arrowleft}
            alt="arrow"
            onClick={() => scrollProducts("left")}
          />
          <img
            src={arrowright}
            alt="arrow"
            onClick={() => scrollProducts("right")}
          />
        </div>
      </div>

      <div className="products-mid">
        <div className="prod-category">
          <p>Apparel</p>
          <p>Acessories</p>
          <p>Best Sellers</p>
          <p>50% off</p>
        </div>
        <div className="products-scroll">
          <div className="prod-list" ref={prodListRef}>
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.image}
                  alt={product.title}
                  width="310"
                  height="322"
                />
                <div className="product-description">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
                <p className="price">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
