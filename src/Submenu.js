import React from "react";

const Submenu = ({ data }) => {
  return (
    <ul className="submenu">
      {data.map((item, index) => (
        <li key={index}>{item.label}</li>
      ))}
    </ul>
  );
};
export default Submenu;
