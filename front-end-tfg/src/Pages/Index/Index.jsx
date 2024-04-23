import { Link } from "react-router-dom";
import "./Index.css";
import { IoPerson ,IoBookSharp,IoTime  } from "react-icons/io5";
import { Card } from "../../components/card/Card";

export const Index = () => {

  const itemsInfo =  [
    {
        title:'Sistemas de usuarios',
        span: 'Brindamos con una gestión de usuarios con lo cuál tendrás acceso al historial de reservas,cancelación de reserva o visualización de perfi les.',
        icon: <IoPerson/>
    },
    {
        title:'Gestión de reservas',
        span: 'Variedad de opciones para la reseva, como la elección de pista, día y hora de juego.',
        icon:<IoBookSharp />
    },
    {
        title:'Facilidad y sencillez',
        span: 'Contamos con la facilidad y sencillez de nuestra reserva y gestión de usuario, para que tan solo te llevo un momento.',
        icon:<IoTime  />
    }

  ]
  return (
    <>
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
            <button className="index-button"> <Link to="/chat" className="header-route">
                  Chat
                </Link></button>
            <button className="index-button-lima"> <Link to="/reservarPartido" className="header-route">
                  Reservar partido
                </Link></button>
          </div>
        </div>
      </div>
    </div>

    <div className="index-container-mid">
        <div className="index-info-reserva">
          <h3>Reserva online</h3>
          <p>Para realizar tu reserva de una pista de pádel <br />
            tienes varias opciones disponibles:
          </p>
          <p>
            Puedes hacerlo mediante nuestra página web.
          </p>
          <p>
            Aunque también puedes llamar por teléfono.
          </p>
          <p>Por supuesto si acudes a nuestras instalaciones <br />
            realizar la reserva en persona.
          </p>
          <p>
            Queremos que sea lo más cómodo y sencillo para ti <br />
            <b>¡Esperemos verte pronto por las pistas!</b>
          </p>
        </div>
        <div className="index-info-section">
            {
              itemsInfo.map((item,index) => (
                <Card key={index} title={item.title} span={item.span}>
                  {item.icon}
                </Card>
              ))
            }
        </div>
    </div>
    </>
  );
};

