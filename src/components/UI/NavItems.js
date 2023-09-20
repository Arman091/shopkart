import React, { useState } from "react";
import "./Navitems.css"
const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" },
];

function Navigation() {
  const [showSubmenus, setShowSubmenus] = useState(false);

  const toggleSubmenus = () => {
    setShowSubmenus(!showSubmenus);
  };

  return (
    <>
      {navbar.map((item) => (
        <div key={item.id} className="nav-item-1">
          <p onClick={item.id === "product" ? toggleSubmenus : undefined}>
            {item.name}
          </p>
          {item.child && showSubmenus && (
            <div className="submenu-1">
              {item.child.map((subItem) => (
                <p key={subItem.id}>{subItem.name}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Navigation;
