import "./Index.css";

export const Index = () => {
  return (
    <div className="index-container">
      <div className="index-ajuste">
        <div className="index-subContainer">
          <div className="index-text">
            <h2>RM PÁDEL INDOOR</h2>
            <p>Club de pádel situado en Osuna.</p>
            <p>
              Tenemos 4 pistas profesionales totalmente climatizadas <br />y
              preparadas para que le saques el máximo rendimiento.
            </p>
          </div>
          <div className="index-buttons">
            <button className="index-button">Chat</button>
            <button className="index-button-lima">Reservar partido</button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* <h2>RM PÁDEL INDOOR</h2>
                <p>Club de pádel situado en Osuna</p>
                <p>Tenemoms 4 pistas profesionales totalmente climatizadas 
                y preparadas para que le saques el máximo rendimiento.
                </p>*/
