import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="span">RMPADELINDOOR</span>
      </div>
      <div className="items">
        <Link to="/">Inicio</Link>
        
        <div className="dropdown">
          <button className="dropbtn">
            Club
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <Link to="/pistasIndoor">Pistas Indoor</Link>
            <Link to="/instalaciones">Instalaciones</Link>
          </div>
        </div>
        <Link to="/contacto">Contacto</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/chat">Reservar Partido </Link>


      </div>
    </div>
  );
};
