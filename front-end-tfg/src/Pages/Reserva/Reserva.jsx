import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/auth";
import axios from "axios";
import "./Reserva.css"; // Asegúrate de importar tu archivo CSS

const horas = [9, 10.3, 12, 16.3, 18, 19.3, 21];

export const Reserva = () => {
  const { profile } = useAuthStore();
  const { _id } = profile;

  const [booking, setBooking] = useState({
    pista: null,
    hora: null,
    diaReserva: null,
    idUsuario: _id,
  });

  const [reservas, setReservas] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [render, setRender] = useState(false)

  useEffect(() => {
    if (selectedDate) {
      const fetchReservas = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3001/booking/date/${selectedDate}`
          );
          if (Array.isArray(res.data)) {
            setReservas(res.data);
          } else {
            setReservas([]);
          }
        } catch (error) {
          console.error("Error fetching reservas:", error);
          setReservas([]);
        }
      };

      fetchReservas();
    }
  }, [selectedDate,render]);

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    if (name === "hora") {
      setBooking({
        ...booking,
        pista: id,
        hora: value,
      });
    } else {
      setBooking({
        ...booking,
        diaReserva: value,
      });
      setSelectedDate(value);
    }
  };

  const handleClickReserva = async () => {
    if (isReserved(booking.pista, booking.hora)) {
      alert("Esta pista ya está reservada para esta hora.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/booking", booking);
      console.log(res);
      setReservas([...reservas, booking]);
      setRender(!render)
    } catch (error) {
      console.error("Error making reserva:", error);
    }
  };

  const isReserved = (pista, hora) => {
    return (
      Array.isArray(reservas) &&
      reservas.some(
        (reserva) => reserva.pista === pista && reserva.hora === hora
      )
    );
  };

  console.log(reservas)
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <div className="reserva-container">
      <form>
        <input
          type="date"
          name="diaReserva"
          id="diaReserva"
          onChange={handleChange}
          min={getTodayDate()}
        />
      </form>
      <div className="row1-reserva">
        <table>
          <thead>
            <tr>
              <th>Pista/Hora</th>
              <th>9:00</th>
              <th>10:30</th>
              <th>12:00</th>
              <th>16:30</th>
              <th>18:00</th>
              <th>19:30</th>
              <th>21:00</th>
            </tr>
          </thead>
          
          <tbody>
            {[1, 2, 3, 4].map((pista) => (
              <tr key={`pista-${pista}`}>
                <td>{`Pista ${pista}`}</td>
                {horas.map((number) => (
                  <td key={number + "_" + pista} className="celda">
                    <button
                      className={`button ${
                        isReserved(pista, number) ? "reserved" : ""
                      }`}
                      name="hora"
                      id={pista}
                      value={number}
                      onClick={handleChange}
                      disabled={isReserved(pista, number)}
                    ></button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="box-info">
          <p>
            <h5>Pista</h5>
            <hr />
            <span>{booking.pista}</span>
          </p>
          <p>
            <h5>Hora</h5>
            <hr />
            <span>{booking.hora}</span>
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="button-reserva"
        onClick={handleClickReserva}
      >
        Reservar
      </button>
    </div>
  );
};
