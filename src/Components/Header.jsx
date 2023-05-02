import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/omoss">Om oss</Link>
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
