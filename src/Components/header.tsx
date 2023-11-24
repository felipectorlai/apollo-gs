'use client'
import { useState } from 'react';
import style from '../styles/components/header.module.scss';
import { IoMdMenu, IoMdHelpCircle, IoIosSettings } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { IoPersonCircle } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';

// Componente de Logo
const Logo = () => {
  return <img src="Logo.png" alt="Logo" className={style.logo} />;
};

// Componente de Login
const Login = () => {
  return (
    <a href="#" className={`${style.linkStyle} nav-Link`}>
      <IoPersonCircle className={style.icon}/>
      Login
    </a>
  );
};

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
          <IoMdMenu style={{fontSize: 20, marginLeft: '10px', marginTop: '15px'}}/>
        </button>
        <div className={style.DivImage}>
          <Image src={"/img/logoApollo.svg"} width={100} height={60} alt='logo'/>
        </div>
        
        <div
          className={`${style.btnNav} offcanvas offcanvas-start ${showMenu ? 'show' : ''}`}
          style={{backgroundColor: '#2a2e32'}}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{color: '#fff'}}>
              Menu
            </h5>
            <button
              type="button"
              className={style.btnNav}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={toggleMenu}
            ><AiOutlineClose style={{fontSize: '25px', color: '#fff'}}/></button>
          </div>
          <div className="offcanvas-body">
            {/* Aqui você pode adicionar links ou qualquer conteúdo do menu */}
            <ul className="navbar-nav">
              <li className="nav-item" style={{borderBottom: '1.5px solid #cccccc', paddingBottom: '15px'}}>
                <a href="#" style={{color: '#6495ed', textDecoration: 'none'}} className={`${style.linkStyle} nav-Link`}>
                  <IoHome className={style.icon}/>
                  Home
                </a>
              </li>
              <br></br>
              <li className="nav-item" style={{borderBottom: '1.5px solid #cccccc', paddingBottom: '15px'}}>
              <a href="#" style={{color: '#6495ed', textDecoration: 'none'}} className={`${style.linkStyle} nav-Link`}>
                  <IoPersonCircle className={style.icon} style={{color: '#6495ed'}}/>
              <li className="nav-item">
              <a href="#" style={{color: 'blue'}} className={`${style.linkStyle} nav-Link`}>
                  <IoPersonCircle className={style.icon}/>

                  Perfil
                </a>
              </li>
              <br></br>
              <li className="nav-item" style={{borderBottom: '1.5px solid #cccccc', paddingBottom: '15px'}}>
              <a href="#" style={{color: '#6495ed', textDecoration: 'none'}} className={`${style.linkStyle} nav-Link`}>
                  <IoIosSettings className={style.icon}/>
                  Configurações
                </a>
              </li>
              <br></br>
              <li className="nav-item" style={{borderBottom: '1.5px solid #cccccc', paddingBottom: '15px'}}>
              <a href="#" style={{color: '#6495ed', textDecoration: 'none'}} className={`${style.linkStyle} nav-Link`}>

              <li className="nav-item">
              <a href="#" style={{color: 'blue'}} className={`${style.linkStyle} nav-Link`}>

                  <IoMdHelpCircle className={style.icon}/>
                  Ajuda
                </a>
              </li>
              <br></br>
              <li className="nav-item" style={{borderBottom: '1.5px solid #cccccc', paddingBottom: '15px'}}>
              <a href="#" style={{color: '#6495ed', textDecoration: 'none'}} className={`${style.linkStyle} nav-Link`}>
                  <ImExit  className={style.icon}/>
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Header;