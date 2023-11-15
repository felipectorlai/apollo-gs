'use client'
import { useState } from 'react';
import style from '../../styles/Components/header.module.scss';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <nav className={style.navStyle}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          onClick={toggleMenu}
          style={{color: 'black'}}
        >
          <span className="navbar-toggler-icon">-</span>
        </button>
  
        <div
          className={`offcanvas offcanvas-start ${showMenu ? 'show' : ''}`}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={toggleMenu}
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Aqui você pode adicionar links ou qualquer conteúdo do menu */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Página 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Página 2
                </a>
              </li>
              {/* Adicione mais itens do menu conforme necessário */}
            </ul>
          </div>
        </div>
        {/**/}
      </nav>
    );
  };

export default Header;