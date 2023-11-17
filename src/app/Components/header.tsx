'use client'
import { useState } from 'react';
import style from '../../styles/Components/header.module.scss';
import { IoMdMenu } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";


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
        >
          <IoMdMenu />
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
                <a href="#" className="nav-link" style={{color: 'blue'}}>
                  <IoHome className={style.icon}/>
                  Home
                </a>
              </li>
              <br></br>
              <li className="nav-item">
                <a href="#" className="nav-link" style={{color: 'blue'}}>
                  <CgProfile className={style.icon}/>
                  Perfil
                </a>
              </li>
              <br></br>
              <li className="nav-item">
                <a href="#" className="nav-link" style={{color: 'blue'}}>
                  <IoIosSettings className={style.icon}/>
                  Configurações
                </a>
              </li>
              <br></br>
              <li className="nav-item">
                <a href="#" className="nav-link" style={{color: 'blue'}}>
                  <IoMdHelpCircleOutline  className={style.icon}/>
                  Ajuda
                </a>
              </li>
              <br></br>
              <li className="nav-item">
                <a href="#" className="nav-link" style={{color: 'blue'}}>
                  <ImExit  className={style.icon}/>
                  Sair
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