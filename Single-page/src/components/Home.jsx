import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <ul className="outer_list">
        <li className="list_style cont">
          Electronics
          <ul className="dropdown">
            <li className="inst">Mobile</li>
            <li className="inst">Tablets</li>
            <li className="inst">Laptops</li>
          </ul>
        </li>
        <li className="list_style cont">Cloth
        <ul className="dropdown">
            <li className="inst">Male</li>
            <li className="inst">Female</li>
            <li className="inst">Child</li>
          </ul>
        </li>
        <li className="list_style cont">Laptops
        <ul className="dropdown">
            <li className="inst">Dell</li>
            <li className="inst">HP</li>
            <li className="inst">Lenevo</li>
            <li className="inst">MSI</li>
            <li className="inst">ROG</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;
