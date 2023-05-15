import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appContext";
import { useState, useEffect } from "react";
import ProductSearch from "./ProductSearch";

function Header() {
  const { filterArray, produceArray, ResetArray } = useContext(AppContext);
  const [dropdown, setDropdown] = useState([]);

  useEffect(() => {
    const tagArray = [];
    const updateTags = (async) => {
      const newArray = [...produceArray];
      newArray.forEach((item) => {
        if (tagArray.includes(item.tag)) {
          return;
        } else {
          tagArray.push(item.tag);
        }
      });
    };
    updateTags();
    setDropdown(tagArray);
  }, []);

  const filterCategory = (e) => {
    filterArray(e);
  };
  const resArray = () => {
    ResetArray();
  };

  return (
    <header className="mb-2">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <div>
        <ProductSearch />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Nyheter">News</Link>
          </li>
          <li>
            <Link to="/KontaktForm">Contact</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>

          <li className="dropdown">
            <Link to="/Results" onClick={resArray}>
              Products
            </Link>
            <div className="dropdown-content">
              <div className="flex flex-col z-20 ">
                {dropdown.map((tag, index) => {
                  return (
                    <Link to="/Results">
                      <button onClick={() => filterCategory(tag)} key={index}>
                        {tag}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li>
            <Link to="/Wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
