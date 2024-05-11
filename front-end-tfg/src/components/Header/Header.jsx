import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle  } from "react-icons/io5";
import logo from './LogoPadelIndoor.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="header-logo">
            <img src={logo} alt="" />
        </div>
        <div className={isOpen ? "header-container-burger" : "header-container"}>
          <div className="header-routesDiv">
            <ul className="header-routes">
              <li>
                <Link to="/" className="header-route">
            
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/instalaciones" className="header-route">
                  Instalaciones
                </Link>
              </li>
              <li>
                <Link to="/chat" className="header-route">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="header-route">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/reservar" className="header-route">
                  Reservar Partido
                </Link>
              </li>
            </ul>
          </div>
          <div >
            <button className="header-iconPerson">
              <Link to="/acceso" className="header-route">
                 <IoPersonCircle/>
              </Link>
            </button>
          </div>
        </div>
      </nav>
      <div className="header-menuBurguer">
        <button className="header-button" type="button" onClick={handleClick}>
          <GiHamburgerMenu />
        </button>
      </div>
    </>
  );
};
