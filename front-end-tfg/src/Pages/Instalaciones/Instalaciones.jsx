import { InstalacionesPistas } from "../../components/Instalaciones-Pistas/InstalacionesPistas";
import { OtrasInstalaciones } from "../../components/OtrasIntalaciones/OtrasInstalaciones";
import "./Instalaciones.css";

import { useState } from "react";

export const Instalaciones = () => {
  const [render, setRender] = useState(true);

  return (
    <div className="instalaciones-container">
      <div className="instalaciones-container-list" >
        <ul className="instalaciones-list"> 
          <li className={render ? 'active' : ''}
            onClick={() => {
              setRender(true);
            }}
          >
            Pistas Indoor
          </li>
          <li className={render === false ? 'active' : ''}
            onClick={() => {
              setRender(false);
            }}
          >
           Otras instalaciones
          </li>
        </ul>
      </div>

      <div>
        { render ? <InstalacionesPistas/> : <OtrasInstalaciones/>}
      </div>
    </div>
  );
};
