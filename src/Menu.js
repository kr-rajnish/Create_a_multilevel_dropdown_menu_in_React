// import react from "React";

import React, { useState } from "react";
import Submenu from "./Submenu";

const Menu = ({ data }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
    } else {
      setOpenMenu(index);
    }
  };

  return (
    <ul className="menu">
      {data.map((item, index) => (
        <li key={index}>
          <span
            onClick={() => toggleSubMenu(index)}
            // className={openMenu === index ? "active" : ""}
          >
            {item.label}
          </span>
          {item.submenu && openMenu === index && (
            <Submenu data={item.submenu} />
          )}
        </li>
      ))}
    </ul>
  );
};
export default Menu;
