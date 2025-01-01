import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="d-flex justify-content-end py-4">
          <ul className="d-flex m-0">
            <li className="ms-3 d-inline-block">
              <a href="">Home</a>
            </li>
            <li className="ms-3 d-inline-block">
              <a href="">About</a>
            </li>
            <li className="ms-3 d-inline-block">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
