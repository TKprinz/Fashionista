import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/Nyheter">Nyheter</Link>
          </li>
          <li>
            <Link to="/KontaktForm">Kontakta</Link>
          </li>

          <li className="dropdown">
            <a href="#">Produkter</a>
            <div className="dropdown-content">
              <Link to="/hoodies">Hoodies</Link>
              <Link to="/tshirts">T-shirts</Link>
              <Link to="/pants">Pants</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
