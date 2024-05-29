import { IoFlashlightOutline, IoHomeOutline, IoStarOutline, IoThermometer } from 'react-icons/io5'
import { Card } from '../card/Card'
import './InstalacionesPistas.css'

export const InstalacionesPistas = () => {
  return (
    <div className="instalaciones-container-pistas">
    <header className="header">
      <h2>Pistas Indoor</h2>
      <p>
        Descubre nuestras modernas pistas de pádel para una experiencia
        única
      </p>
    </header>
    <main className="main-pistas">
      <div className="cards">
        <div className="row-card">
          <Card
            title={"Recinto Indoor"}
            span={
              "Disfruta del pádel con cualquier clima en cualquier época."
            }
          >
            <IoHomeOutline size={20}/>
          </Card>
          <Card
            title={"Pistas de Calidad"}
            span={"Máxima calidad para los jugadores más exigentes."}
          >
            <IoStarOutline size={20}/>
          </Card>
        </div>
        <div className="row-card">
          <Card
            title={"Climatización"}
            span={"Nuestro recinto se encuentra 100% climatizado."}
          >
            <IoThermometer size={20}/>
          </Card>
          <Card
            title={"Iluminación Led"}
            span={"Garantizamos una excelente visibilidad y comodidad."}
          >
            <IoFlashlightOutline size={20}/>
          </Card>
        </div>
      </div>
      <div className="images">
        <div>
          <img
            className="img-pistas"
            src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7723.jpg"
            alt="Imagen dentro de pista"
          />
          <img
          className="img-pistas"
            src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7728.jpg"
            alt="Imagen de banquillos"
          />
        </div>
        <div>
          <img
          className="img-pistas"
            src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7722.jpg"
            alt="Imagen fuera de pista"
          />
          <img
          className="img-pistas"
            src="https://osunapadelindoor.es/wp-content/uploads/2023/04/IMG_7724-1.jpg"
            alt="Imagen global de pistas"
          />
        </div>
      </div>
    </main>
  </div>
  )
}
