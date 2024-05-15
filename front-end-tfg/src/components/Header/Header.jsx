import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircle  } from "react-icons/io5";
import logo from './LogoPadelIndoor.png'
import { useAuthStore } from "../../store/auth";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {profile} = useAuthStore()
  //  const logOut = useAuthStore(state => state.logOut)
  const adminStorage = useAuthStore(state => state.admin)
  
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
              {adminStorage && (
                <li>
                  <Link to="/dashboard" className="header-route">
                    <strong> Dashboard</strong>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div >
            {profile === null ? (
             
             <button className="header-iconPerson">
                <Link to="/acceso" className="header-route">
                   <IoPersonCircle/>
                </Link>
              </button>

            ): (
              <Link to={'/user/' + profile._id} className="header-route">
              <aside className='card-user'>
                <div className="card-img"><img src={'https://unavatar.io/midudev'} /></div>
                <div className="card-text">
                  <span><strong>{profile.username}</strong></span>
                  <span>{profile.name}</span>
                </div>
              </aside>
              </Link>
            )}
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
