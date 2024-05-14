import { useState } from "react";
import { useAuthStore } from "../../store/auth";
import axios from "axios";

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

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    if (name == "hora") {
        setBooking({
            ...booking,
            pista:id,
            hora:value
        })
    }else {
        setBooking({
            ...booking,
            diaReserva: value,
        });
    }
  };

  const handleClickReserva = async ()=> {
    const res = await axios.post('http://localhost:3001/booking',booking)
    console.log(res)
  }
  

  return (
    <div>
      <form>
        <input
          type="date"
          name="diaReserva"
          id="diaReserva"
          onChange={handleChange}
        />
      </form>
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
          <tr>
            <td>Pista 1</td>
            {horas.map((number) => {
              return (
                <td key={number + "_1"} className="celda">
                  <button
                    className="button"
                    name="hora"
                    id={1}
                    value={number}
                    onClick={handleChange}
                  >
                    {number}
                  </button>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Pista 2</td>
            {horas.map((number) => {
              return (
                <td key={number + "_2"} className="celda">
                  <button
                    className="button"
                    name="hora"
                    id={2}
                    value={number}
                    onClick={handleChange}
                  >
                    {number}
                  </button>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Pista 3</td>
            {horas.map((number) => {
              return (
                <td key={number + "_3"} className="celda">
                  <button
                    className="button"
                    name="hora"
                    id={3}
                    value={number}
                    onClick={handleChange}
                  >
                    {number}
                  </button>
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Pista 4</td>
            {horas.map((number) => {
              return (
                <td key={number + "_4"} className="celda">
                  <button
                    className="button"
                    name="hora"
                    id={4}
                    value={number}
                    onClick={handleChange}
                  >
                    {number}
                  </button>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>


      <button type="submit" onClick={handleClickReserva}>Reservar</button>
    </div>
  );
};
