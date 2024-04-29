import { IoThermometer } from "react-icons/io5";
import { Card } from "../card/Card";
import './OtrasInstalaciones.css'

export const OtrasInstalaciones = () => {
  return (
    <div className="container-otras-instalaciones">
      <div className="container-instalaciones">
        <header className="header">
          <h2>Zona de bar</h2>
          <p>
            ¡Relájate después de jugar al pádel en nuestro bar! <br />
            Contamos con bebidas y snacks para recargar energías.
          </p>
        </header>
        <main className="main">
          <div className="cards">
            <div className="row-card">
              <Card
                span={"Toma un aperitivo después de un gran partido."}
                title={"Snacks"}
              ></Card>
              <Card
                span={"TV gratuita para todos los clientes."}
                title={"TV gratuita"}
              ></Card>
            </div>
            <div className="row-card">
              <Card
                span={"Red Wi-Fi gratuita para todos los clientes."}
                title={"Wi-Fi gratuito"}
              ></Card>
              <Card
                span={"Refréscate tomando algo después de tu partido."}
                title={"Bebidas"}
              ></Card>
            </div>
          </div>
          <div className="images-instalaciones">
            <img className="img-instalaciones" src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7769.jpg" alt="" />
            <img className="img-instalaciones" src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7774.jpg" alt="" />
          </div>
        </main>
      </div>
      <div className="container-instalaciones">
        <header className="header">
          <h2>Ducha y vestuarios</h2>
          <p>Refréscatae después de un partido y ponte cómodo.</p>
        </header>
        <main className="main">
          <div className="cards">
            <div className="row-card">
              <Card
                span={"Duchas y vestuarios para hombre"}
                title={"Zona hombre"}
              ></Card>
              <Card
                span={"Duchas y vestuarios para mujeres"}
                title={"Zona mujer"}
              ></Card>
            </div>
            <div className="row-card">
              <Card
                span={"Nuestras zonas están totalmente climatizadas "}
                title={"Climatización"}
              >
                <IoThermometer />
              </Card>

              <Card
                span={"No te preocupes si olvidas algo par atu aseo"}
                title={"Material de aseo"}
              ></Card>
            </div>
          </div>
          <div className="images-instalaciones">
            <img className="img-instalaciones" src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7740.jpg" alt="" />
            <img className="img-instalaciones" src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7749-1-1.jpg" alt="" />
          </div>
        </main>
      </div>
    </div>
  );
};
