import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../appContext';
import { useState, useEffect } from 'react';

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
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/Nyheter">Nyheter</Link>
          </li>
          <li>
            <Link to="/KontaktForm">Kontakt</Link>
          </li>

          <li className="dropdown">
            <Link to="/Results" onClick={resArray}>
              Produkter
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
