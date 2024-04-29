import "./Footer.css";
import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const links = [
    [
      { label: "Compañía", key: "header-1" },
      { label: "Sobre nosotros", key: "item-1-1" },
      { label: "Contáctanos", key: "item-1-3" },
      { label: "Política de privacidad", key: "item-2-4" },
    ],
  ];
  return (
    <div className="footer">
      <div className="footer-company-info">
        <div className="footer-img">
          <img src="" alt="" />
          <span>RM PADEL INDOOR</span>
        </div>

        <div className="infos">
          <span>Copyright © 2024 RM PADEL INDOOR.</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
      <div className="footer-links">
        {links.map((col, index) => (
          <ul className={`col col-${index + 1}`} key={`col-${index}`}>
            {col.map((link, index) => (
              <li key={`link-${col}-${index}`}>{link.label}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className="footer-icons">
        <h3>Redes sociales</h3>
        <div className="icons">
          <a href="https://instagram.com/ruben_m_h_">
            <FaInstagram />{" "}
          </a>
          <a href="">
            <FaDribbble />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
          <a href="">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
