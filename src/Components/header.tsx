'use client'
import { useState } from 'react';
import style from '../styles/components/header.module.scss';
import { IoMdMenu, IoMdHelpCircle, IoIosSettings } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { IoPersonCircle } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <nav className={style.navStyle}>
        <button 
          className="navbar-toggler"
          style={{position: 'absolute', left: 5}}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          onClick={toggleMenu}>
          <IoMdMenu style={{fontSize: 20}}/>
        </button>
        <div className={style.DivImage}>
          <Image src={"/img/logoApollo.svg"} width={100} height={100} alt='logo'/>
        </div>
        
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
                <a href="#" style={{color: 'blue'}} className={`${style.linkStyle} nav-Link`}>
                  <IoHome className={style.icon}/>
                  Home
                </a>
              </li>
              <br></br>
              <li className="nav-item">
              <a href="#" style={{color: 'blue'}} className={`${style.linkStyle} nav-Link`}>
                  <IoPersonCircle className={style.icon}/>
                  Perfil
                </a>
              </li>
              <br></br>
              <li className="nav-item">
              <a href="#" style={{color: 'blue'}} className={`${style.linkStyle} nav-Link`}>
                  <IoIosSettings className={style.icon}/>
                  Configurações
                </a>
              </li>
              <br></br>
              <li className="nav-item">
              <a href="#" style={{color: 'blue'}} className={`${style.linkStyle} nav-Link`}>
                  <IoMdHelpCircle className={style.icon}/>
                  Ajuda
                </a>
              </li>
              <br></br>
              <li className="nav-item">
              <a href="#" style={{color: 'blue'}} className={`${style.linkStyle} nav-Link`}>
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