import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../appContext';
import { useState, useEffect } from 'react';

function Header() {
  const { filterArray } = useContext(AppContext);

  const filterCategory = (e) => {
    filterArray(e);
  };

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
            <Link to="#">Produkter</Link>
            <div className="dropdown-content">
              <div className="flex flex-col ">
                <button onClick={() => filterCategory('hoodie')}>
                  Hoodies
                </button>
                <button onClick={() => filterCategory('tshirt')}>
                  T-shirts
                </button>
                <button onClick={() => filterCategory('pants')}>Pants</button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
