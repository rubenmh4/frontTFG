import { InstalacionesPistas } from "../../components/Instalaciones-Pistas/InstalacionesPistas";
import { OtrasInstalaciones } from "../../components/OtrasIntalaciones/OtrasInstalaciones";
import { RenderVar } from "../../components/RenderVar/RenderVar";
import "./Instalaciones.css";

import { useState } from "react";

export const Instalaciones = () => {
  const [render, setRender] = useState(true);

  return (
    <div className="instalaciones-container">
      <RenderVar render={render} setRender={setRender} firstElement={'Pistas Indoor'} secondElement={'Otras instalaciones'}/>

      <div>
        { render ? <InstalacionesPistas/> : <OtrasInstalaciones/>}
      </div>
    </div>
  );
};
