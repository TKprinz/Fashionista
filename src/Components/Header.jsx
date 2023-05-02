import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Företagslogotyp" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Hem</a>
          </li>
          <li>
            <a href="#">Om oss</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li className="dropdown">
            <a href="#">Produkter</a>
            <div className="dropdown-content">
              <a href="#">Produkt 1</a>
              <a href="#">Produkt 2</a>
              <a href="#">Produkt 3</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
